import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Geography from "./pages/Geography";
import Customers from "./pages/Customers";
import Transactions from "./pages/Transactions";
import Overview from "./pages/Overview";
import Daily from "./pages/Daily";
import Monthly from "./pages/Monthly";
import Breakdown from "./pages/Breakdown";

import { useState, useEffect } from "react";
import Admins from "./pages/Admins";

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsSidebarOpen(window.innerWidth > 1280);
      setScreenSize(window.innerWidth);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
              screenSize={screenSize}
              setScreenSize={setScreenSize}
            />
          }
        >
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route
            path="/dashboard"
            element={
              <Dashboard
                isSidebarOpen={isSidebarOpen}
                screenSize={screenSize}
              />
            }
          />
          <Route
            path="/products"
            element={
              <Products isSidebarOpen={isSidebarOpen} screenSize={screenSize} />
            }
          />
          <Route
            path="/customers"
            element={
              <Customers
                isSidebarOpen={isSidebarOpen}
                screenSize={screenSize}
              />
            }
          />
          <Route
            path="/transactions"
            element={
              <Transactions
                isSidebarOpen={isSidebarOpen}
                screenSize={screenSize}
              />
            }
          />
          <Route
            path="/geography"
            element={
              <Geography
                isSidebarOpen={isSidebarOpen}
                screenSize={screenSize}
              />
            }
          />
          <Route
            path="/overview"
            element={
              <Overview isSidebarOpen={isSidebarOpen} screenSize={screenSize} />
            }
          />
          <Route
            path="/daily"
            element={
              <Daily isSidebarOpen={isSidebarOpen} screenSize={screenSize} />
            }
          />
          <Route
            path="/monthly"
            element={
              <Monthly isSidebarOpen={isSidebarOpen} screenSize={screenSize} />
            }
          />
          <Route
            path="/breakdown"
            element={
              <Breakdown
                isSidebarOpen={isSidebarOpen}
                screenSize={screenSize}
              />
            }
          />
          <Route
            path="/admin"
            element={
              <Admins isSidebarOpen={isSidebarOpen} screenSize={screenSize} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
