import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaUser, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import FrameComponent4 from "./FrameComponent4";

const navLinks = [
  { title: "Music", url: "/Music" },
  { title: "About", url: "/About" },
  { title: "Events", url: "/Events" },
  { title: "Shop", url: "/Shop" },
  { title: "Gallery", url: "/Gallery" },
];

const iconList = [
  { icon: <FaUser /> },
  { icon: <FaHeart /> },
  { icon: <FaShoppingCart /> },
];

const bgColor = "bg-gray-300";
const modalColor = "bg-gray-900";

const Navbar = ({ className = "" }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBarsIconClick = () => {
    toggleModal();
  };

  return (
    <section
      className={`self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[130px] box-border gap-[30px] max-w-full text-left text-15xl text-red-200 font-manrope mq450:pb-[244px] mq450:box-border mq1100:pb-[375px] mq1100:box-border ${className}`}
    >
      <FrameComponent4 />
      <div style={{ marginTop: "12vh", marginLeft: "20vh", zIndex: "99" }} className="fixed self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        {!isMobile ? (
          // Desktop Navbar
          <nav className={`w-[1240px] shadow-[2px_2px_10px_4px_rgba(255,_22,_22,_0.2)] [backdrop-filter:blur(8px)] ${bgColor} overflow-hidden shrink-0 flex flex-row items-start justify-between py-[27px] px-[35px] box-border gap-[20px] max-w-full z-[1] mq1100:flex-wrap`}>
            {navLinks.map((link, index) => (
              <a key={index} href={link.url} className="[text-decoration:none] relative text-[inherit] inline-block min-w-[94px] mq450:text-xl mq750:text-8xl tm-6 group relative w-max hover:text-wheat-100">
                <span>{link.title}</span>
                <span className="absolute -bottom-1 left-0 w-0 transition-all h-0.5 bg-wheat-100 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
        ) : (
          // Mobile Navbar
          <nav className={`h-screen ${bgColor} py-4 px-4`}>
            <div className="mx-auto flex justify-between items-center ">
              <div className="text-white font-bold text-xl">Logo</div>
              <div className="flex justify-end items-center gap-6 text-white cursor-pointer">
                {iconList.map((item, index) => (
                  <div key={index} onClick={index === iconList.length - 1 ? handleBarsIconClick : null}>
                    {item.icon}
                  </div>
                ))}
                <FaBars onClick={handleBarsIconClick} className="text-white cursor-pointer" />
              </div>
            </div>
            {showModal && (
              <div className="fixed inset-0 flex justify-center items-center">
                <div className={`absolute inset-0 ${modalColor}`} />
                <FaTimes className="absolute top-6 right-4 text-white cursor-pointer" onClick={toggleModal} style={{ fontSize: "16px" }} />
                <div className="relative bg-gray-900 w-full">
                  <div className="flex flex-col gap-8 items-center justify-center h-full">
                    {navLinks.map((link, index) => (
                      <span key={index} className="text-white font-light text-2xl cursor-pointer">
                        {link.title}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </nav>
        )}
      </div>
    </section>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
};

export default Navbar;
