/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useSelector } from "react-redux";
import { useFetchUserQuery } from "../store/api";

const Layout = ({ isSidebarOpen, setIsSidebarOpen, screenSize }) => {
  const userId = useSelector((state) => state.global.userId);
  const { data } = useFetchUserQuery(userId);

  return (
    <div
      className={`min-h-screen bg-slate-950 ${
        isSidebarOpen && screenSize < 580 ? "flex" : "flex justify-between"
      }`}
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div
        className={`transition-all duration-200 ${
          isSidebarOpen
            ? "w-[calc(100vw-300px)] translate-x-[300px]"
            : "w-full -translate-x-0"
        } `}
      >
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          screenSize={screenSize}
          user={data}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
