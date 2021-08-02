import { useState } from "react";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, isHome = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle} isHome={isHome} />
      <MobileNav toggle={toggle} isOpen={isOpen} />

      {children}
      <Footer />
    </>
  );
};

export default Layout;
