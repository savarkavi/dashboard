/* eslint-disable react/prop-types */
import { useNavigate, useLocation } from "react-router-dom";
import { sidebarLinks } from "../utils/data";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useEffect, useState } from "react";

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const [active, setActive] = useState("dashboard");
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleClose = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);

  const renderedSidebarLinks = sidebarLinks.map((link) => {
    if (!link.icon) {
      return (
        <div key={link.name} className="text-amber-200 my-8 ">
          {link.name}
        </div>
      );
    }
    return (
      <div
        key={link.name}
        className={`flex ${
          active === link.name.toLowerCase()
            ? "bg-amber-200 text-indigo-950"
            : "text-white"
        }  items-center gap-2 py-3 cursor-pointer hover:bg-amber-200 px-2 hover:text-indigo-950 rounded-lg my-1 text-sm transition-all`}
        onClick={() => {
          navigate(link.name.toLowerCase());
          setActive(link.name.toLowerCase());
        }}
      >
        <div>{link.icon}</div>
        <span>{link.name}</span>
      </div>
    );
  });

  return (
    <div
      className={`w-[300px] transform  bg-indigo-950 py-8 px-8 h-screen overflow-y-scroll ${
        isSidebarOpen ? "fixed" : "-translate-x-[500px] fixed"
      } transition-transform duration-200`}
    >
      <div className="flex justify-between items-center mb-12">
        <h1 className="text-xl sm:text-2xl text-amber-200 ">ECOMBOARD</h1>
        <MdKeyboardArrowLeft
          className="text-white text-3xl cursor-pointer"
          onClick={handleClose}
        />
      </div>
      <div>{renderedSidebarLinks}</div>
    </div>
  );
};

export default Sidebar;
