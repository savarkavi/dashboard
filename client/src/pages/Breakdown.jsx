import Header from "../components/Header.jsx";
import BreakdownChart from "../components/BreakdownChart";

const Breakdown = () => {
  return (
    <div>
      <div className="p-8 h-[calc(100vh-104px)] overflow-y-scroll">
        <Header
          title={"Breakdown"}
          subtitle={"Breakdown of sales by category"}
        />
        <div>
          <BreakdownChart />
        </div>
      </div>
    </div>
  );
};

export default Breakdown;
