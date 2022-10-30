import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, Box, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
    darkMode: boolean;
    handleThemeChange: () => void;
}

const midLinks = [
    { title: "Catalog", path: "/catalog" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
];

const rightLinks = [
    { title: "Login", path: "/login" },
    { title: "Register", path: "/register" },  
];

const styleNavLinks = {
    color: 'inherit',
    typography: 'h6',
    textDecoration: 'none',
    '&:hover': { color: 'grey.500' },
    '&.active': { color: 'text.secondary' },
};

export default function Header({ darkMode, handleThemeChange }: Props) {
    return (
        <AppBar position="static" sx={{ mb: 4 }} >
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Typography variant='h6'
                        exact
                        component={NavLink}
                        to='/'
                        sx={styleNavLinks}>
                        RE-STORE
                    </Typography>
                    <Switch
                        checked={darkMode}
                        onChange={handleThemeChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </Box>
                <List sx={{ display: 'flex', flexDirection: 'row' }}>
                    {midLinks.map(({ title, path }) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={styleNavLinks}>
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton size='large' sx={{ color: 'inherit' }}>
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    <List sx={{ display: 'flex', flexDirection: 'row' }}>
                        {rightLinks.map(({ title, path }) => (
                            <ListItem
                                component={NavLink}
                                to={path}
                                key={path}
                                sx={styleNavLinks}>
                                {title.toUpperCase()}
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
