import React from "react";
import Navbar from "../onetime/Navbar";
import Footer from "../onetime/Footer";

const RootLayout = ({ children }) => {
  return (
    <div>
      <Navbar />

      <div className="min-h-screen bg-cyan-950 text-gray-300">
        <div className="mx-auto container">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
