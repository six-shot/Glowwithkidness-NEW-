import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { HiMenuAlt4, HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CiLocationOn,CiSearch } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import {
  containerVars,
  menuVars,
  mobileLinkVars,
} from "../../../../utils/motion";
export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const closeMenu = () => {
    setOpen(false);
  };
  const nav = [
    { title: "Home",link:"/" },
    { title: "About Us",link:"about" },
    { title: "Book Appointment",link:"/" },
    { title: "Hair Guide",link:"/hair-guide" },
    { title: "For You",link:"/for-you" },
    { title: "Contact Us",link:"/contact-us" },
  ];
  return (
    <div className="fixed z-[50] w-full ">
      <div className="bg-[#F1CEDD] w-full">
        <div className="h-[4vh] w-full sm:hidden flex  justify-center items-center">
          <div className="flex items-center gap-1">
            <h6 className="sm:text-sm text-xs">inquiry@glowwithkindness.com</h6>
          </div>
        </div>
        <div className=" px-[5%] w-full   max-w-[1440px] mx-auto h-[6vh] text-center text-black text-xs sm:flex hidden justify-between   items-center text-semibold">
          <div className="flex gap-5  items-center">
            {" "}
            <div className="flex items-center gap-1">
              <CiLocationOn className="text-[20px]" />
              <h6 className="sm:text-sm text-xs">
                3702 Frankford Rd, Dallas TX, 75287
              </h6>
            </div>
            <div className="flex items-center gap-1">
              <FiPhone className="text-[16px]" />
              <h6 className="sm:text-sm text-xs">(469) 670-0124</h6>
            </div>
            <div className="flex items-center gap-1">
              <MdOutlineEmail className="text-[20px]" />
              <h6 className="sm:text-sm text-xs">
                inquiry@glowwithkindness.com
              </h6>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[20px] ">
            <FaFacebookF />
            <FaInstagram />
            <FaTiktok />
            <FaTwitter />
          </div>
        </div>
        <div className="bg-black">
          <div className="max-w-[1440px] mx-auto flex justify-between items-center w-full sm:h-[13vh] h-[10vh] px-[5%] ">
            <div>
              <img className="sm:w-[100px] w-[70px]" src="/glowlogo.png" />
            </div>
            <nav className="flex items-center text-white gap-7">
              <ul className="sm:flex hidden gap-7 items-center  text-sm uppercase">
                <Link to="/">
                  {" "}
                  <li>Home</li>
                </Link>
                <Link to="/about">
                  {" "}
                  <li>About us</li>
                </Link>
                <Link to="/hair-guide">
                  {" "}
                  <li>Hair Guide</li>
                </Link>

                <Link to="/for-you">
                  {" "}
                  <li>For You</li>
                </Link>
                <Link to="/contact-us">
                  {" "}
                  <li>Contact us</li>
                </Link>
              </ul>
              <div className="sm:flex hidden gap-7 items-center">
                <CiSearch className="text-[30px]" />
                <button className=" sm:flex hidden py-2.5 px-6  text-black bg-[#F1CEDD]">
                  Book Now
                </button>
                <HiOutlineMenuAlt3
                  onClick={() => setToggle(!toggle)}
                  className="text-[35px]"
                />
              </div>
            </nav>

            <div className="sm:hidden flex">
              <HiOutlineMenuAlt3
                onClick={toggleMenu}
                className="text-[30px] text-white"
              />
            </div>
          </div>
        </div>
        <div
          className={`${
            toggle ? "flex flex-col" : "hidden"
          } py-6 backdrop-blur-[5px] bg-white fixed top-0 right-0 min-w-[350px] px-[1%] cursor-pointer h-screen  sidebar z-[100]`}
        >
          <div
            onClick={() => setToggle(!toggle)}
            className="w-[60px] h-[60px] bg-primary flex items-center justify-center text-[24px] rounded-full"
          >
            <IoCloseOutline />
          </div>
        </div>
        <div>
          {" "}
          <AnimatePresence>
            {open && (
              <motion.div
                variants={menuVars}
                initial="initial"
                animate="animate"
                exit="exit"
                className="fixed z-[10000000] left-0 top-0 h-screen w-full origin-top bg-[#F1CEDD] text-black py-[7%] px-[5%] "
              >
                <div className="flex h-full flex-col">
                  <div className="flex justify-between">
                    <Link href="/">
                      {" "}
                      <div>
                        <img className="w-[70px]" src="/logo.png" />
                      </div>
                    </Link>
                    <p className="text-md cursor-pointer " onClick={toggleMenu}>
                      Close
                    </p>
                  </div>
                  <motion.div
                    variants={containerVars}
                    initial="initial"
                    animate="open"
                    exit="initial"
                    className="flex h-full flex-col items-center justify-center gap-4"
                  >
                    {nav.map((item) => (
                      <div>
                        <MobileNavLink title={item.title} link={item.link} />
                      </div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
const MobileNavLink = ({ title, link}) => {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="text-2xl uppercase text-black"
    >
      <Link to={link} >
        {title}
      </Link>
    </motion.div>
  );
};
