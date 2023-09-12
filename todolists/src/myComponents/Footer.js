import React from "react";

export const Footer = () => {
  const footerStyle = {
    position: "absolute",
    top: "100vh",
    width: "100%",
    background: "#000",
  };

  const secondStyle = {
    color: "#fff",
    padding: "20px",
    margin: "10px",
  };
  return <footer style={(footerStyle, secondStyle)}>Footer</footer>;
};
