import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import SingleProducts from "./SingleProduct";
import Contact from "./Contact";
import Cart from "./Cart";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ErrorPage from "./components/Error404";
import Products from "./Products";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24, 24, 29)",
      text: "rgba(29, 29, 29, .8)",
      white: "#fff",
      black: "#000",
      helper: "#8490ff",
      bg: "#f6f8fa",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 05)",
      hr: "#fff",
      shadow:
        "rgba(0, 0, 0, .2) 0px 1px 3px 0px,rgba(27, 31, 35, .15) 0px 0px 0px 1px;",
      shadowSupport: "rgba(0, 0, 0, .16) 0px 1px 4px",
      gradient:
        "linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98 198 252) 100%",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/singleproducts/:id" element={<SingleProducts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
