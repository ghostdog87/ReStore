using API.Data;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using System;

namespace API;

public class Program
{
    public static void Main(string[] args)
    {
        var host = CreateHostBuilder(args).Build();
        using var scoped = host.Services.CreateScope();
        var context = scoped.ServiceProvider.GetRequiredService<StoreContext>();
        var logger = scoped.ServiceProvider.GetRequiredService<ILogger<Program>>();

        try
        {
            context.Database.Migrate();
            DbInitializer.Initialize(context);
        }
        catch (Exception ex)
        {
            logger.LogError(ex, "Problem migrating data.");
        }

        host.Run();
    }

    public static IHostBuilder CreateHostBuilder(string[] args)
    {
        return Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });
    }
}