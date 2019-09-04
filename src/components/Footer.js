import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Created by Mauro Bono © {currentYear}</p>
    </footer>
  );
};

export default Footer;
