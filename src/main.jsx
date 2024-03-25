import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./components/layout/Main/Main.jsx";
import Home from "./components/pages/Home/Home.jsx";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Solutions from "./components/pages/Solutions/Solutions.jsx";
import FinancialServices from "./components/pages/Financial-Services/FinancialServices.jsx";
import Pricing from "./components/pages/Pricing/Pricing.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";
import AdminLogin from "./components/pages/AdminLogin/AdminLogin.jsx";

//use custom theme...................!
const theme = createTheme({
  breakpoints: {
    keys : ["xs", "sm", "md", "lg", "xl"],
  },
  typography: {
    fontFamily: "'Exo 2', sans-serif",
    color: 'gray'
  },
  p: {
    color: 'gray',
  },
  img: {
    width: '100%'
  },
  palette: {
    mode: "light",
    common: {
      black: '#000',
      white: '#ffffff'
    },
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff"
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff"
    },
    error: {
      main: "#d32f2f",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "#fff"
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#fff"
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)'
    }
  },
  // spacing: {
  //   borderRadius: 4
  // },
  zIndex: {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500
  },
  images: {
    height: '51px',
    width: '51px',
  }
});

//Define all route for the components.........!
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: '/solution',
        element: <Solutions></Solutions>
      },
      {
        path: '/Financial-Services',
        element: <FinancialServices></FinancialServices>
      },
      {
        path: '/pricing',
        element: <Pricing></Pricing>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/adminLogin',
        element: <AdminLogin></AdminLogin>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </React.StrictMode>
);
