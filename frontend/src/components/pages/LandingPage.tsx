import React from "react";
import { Footer } from "../ui/Footer";
import { Navbar } from "../ui/Navbar";
import { About } from "../sections/About";
import { Features } from "../sections/Features";

export const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Features/>
      <Footer />
    </div>
  );
};

export default LandingPage;
