import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import Catalog from "../../features/catalog/Catalog";
import Header from "./Header";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const palletType = darkMode ? 'dark' : 'light'
    const theme = createTheme({
        palette: {
            mode: palletType,
            background: {
                default: darkMode ? '#121212' : grey[300]
            }
        },
    });

    function handleThemeChange() {
        setDarkMode(!darkMode);
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
            <Container>
                <Catalog />
            </Container>
        </ThemeProvider>
    );
}

export default App;
