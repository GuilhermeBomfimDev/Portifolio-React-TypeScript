import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
        primary: {
            main: "#180161",
        },
        secondary: {
            main: "#E7F6F2",
        },
    },
    typography: {
        fontFamily: '"Segoe UI"',
        h1: {
            fontSize: "5rem",
            fontWeight: 500,
        },
    }
});

theme = responsiveFontSizes(theme);

export default theme;
