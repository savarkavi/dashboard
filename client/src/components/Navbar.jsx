/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillCaretDown,
} from "react-icons/ai";
import { CiSettings } from "react-icons/ci";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, screenSize, user }) => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);

  const handleOpen = () => {
    setIsSidebarOpen(true);
  };

  const handleLogoutToggle = () => {
    setIsLogoutOpen((prevState) => !prevState);
  };

  return (
    <div
      className={`flex  ${
        isSidebarOpen && screenSize < 1280 ? "justify-end" : "justify-between"
      }  items-center py-8 px-4 lg:px-8 gap-2`}
    >
      {(!isSidebarOpen || screenSize > 1280) && (
        <div className="flex gap-4 lg:gap-6 items-center">
          <AiOutlineMenu
            className="text-2xl text-white cursor-pointer"
            onClick={handleOpen}
          />
          <div className="relative">
            <input
              type="text"
              placeholder="search..."
              className="px-2 py-2 outline-none bg-indigo-950 text-white rounded-lg text-sm sm:w-56 lg:w-64"
            />
            <AiOutlineSearch className="absolute right-0 text-white cursor-pointer top-1/2 -translate-y-1/2 -translate-x-1/2" />
          </div>
        </div>
      )}
      <div className={`flex gap-4 lg:gap-6 items-center`}>
        {(!isSidebarOpen || screenSize > 500) && (
          <CiSettings className="text-2xl text-white cursor-pointer" />
        )}
        <div className="relative">
          <div
            className="flex gap-2 md:gap-3  items-center cursor-pointer"
            onClick={handleLogoutToggle}
          >
            <img
              src="../../public/profile.webp"
              alt="pp"
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            />
            {screenSize > 768 && (
              <div className="flex flex-col text-sm text-white capitalize">
                <span className="">{user?.name}</span>
                <span className="text-gray-400 text-xs">
                  {user?.occupation}
                </span>
              </div>
            )}
            <AiFillCaretDown className="text-amber-200" />
          </div>
          {isLogoutOpen && (
            <div className="text-indigo-950 bg-amber-200 py-2 text-xs md:text-base w-full rounded-lg text-center absolute -bottom-16 cursor-pointer">
              Logout
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
