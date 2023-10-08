/* eslint-disable react/prop-types */
import { useState } from "react";
import Header from "../components/Header";
import OverviewChart from "../components/OverviewChart";

const Overview = ({ isSidebarOpen, screenSize }) => {
  const [view, setView] = useState("sales");

  return (
    <div>
      {(!isSidebarOpen || screenSize > 640) && (
        <div className="p-8">
          <Header
            title="Overview"
            subtitle={"Overview of general revenue and profits"}
          />
          <select
            className="p-3 mt-4 rounded-lg bg-slate-950 text-white border border-white"
            onChange={(e) => setView(e.target.value)}
          >
            <option value="sales">Sales</option>
            <option value="units">Units</option>
          </select>
          <OverviewChart view={view} />
        </div>
      )}
    </div>
  );
};

export default Overview;
