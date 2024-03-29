import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useState } from "react";
import { Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ProductDetails from "../../features/catalog/ProductDetails";
import ContactPage from "../../features/contact/ContactPage";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";
import "react-toastify/dist/ReactToastify.css"
import ServerError from "../errors/ServerError";

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
            <ToastContainer position='bottom-right' hideProgressBar theme='colored'/>
            <CssBaseline />
            <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>
            <Container>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/catalog' component={Catalog} />
                <Route path='/catalog/:id' component={ProductDetails} />
                <Route path='/about' component={AboutPage} />
                <Route path='/contact' component={ContactPage} />
                <Route path='/server-error' component={ServerError} />
            </Container>
        </ThemeProvider>
    );
}

export default App;
