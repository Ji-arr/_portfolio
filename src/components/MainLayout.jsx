import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

function MainLayout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default MainLayout;
