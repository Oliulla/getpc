import React from "react";
import Navbar from "../onetime/Navbar";
import Footer from "../onetime/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
