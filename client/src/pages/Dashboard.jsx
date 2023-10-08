/* eslint-disable react/prop-types */
import Header from "../components/Header";
import BreakdownChart from "../components/BreakdownChart";
import OverviewChart from "../components/OverviewChart";
import { useFetchDashboardQuery } from "../store/api";
import { AiFillMail, AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlinePointOfSale } from "react-icons/md";
import { BsStack } from "react-icons/bs";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import "@inovua/reactdatagrid-community/base.css";
import "@inovua/reactdatagrid-community/theme/blue-dark.css";

const Dashboard = ({ isSidebarOpen, screenSize }) => {
  const { data, isLoading } = useFetchDashboardQuery();

  const gridData = data?.transactions?.map((data) => {
    return {
      ...data,
      products: data?.products?.length,
    };
  });

  const gridStyle = { minHeight: 700 };

  const columns = [
    { name: "_id", header: "Id", defaultFlex: 2 },
    { name: "userId", header: "User Id", defaultFlex: 2 },
    { name: "createdAt", header: "Created At", defaultFlex: 2 },
    { name: "products", header: "# of Products", defaultFlex: 1 },
    { name: "cost", header: "Price(in $)", defaultFlex: 2 },
  ];

  return (
    <div>
      {(!isSidebarOpen || screenSize > 640) && (
        <div className="p-8 ">
          <Header title={"Dashboard"} subtitle={"Welcome to your Dashboard"} />
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col items-center lg:items-start lg:flex-row gap-2">
                  <div className="flex flex-col justify-between gap-4 bg-indigo-950 p-4 w-full lg:w-[250px] h-[180px] rounded-lg text-amber-200">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Total customers</span>
                      <AiFillMail className="text-2xl" />
                    </div>
                    <span className="text-2xl">{data?.totalCustomers}</span>
                    <div className="flex justify-between items-center">
                      <span>+14%</span>
                      <span className="text-white">Since last month</span>
                    </div>
                  </div>

                  <div className="flex flex-col  justify-between gap-4 bg-indigo-950 p-4 w-full lg:w-[250px] h-[180px] rounded-lg text-amber-200">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Sales today</span>
                      <MdOutlinePointOfSale className="text-2xl" />
                    </div>
                    <span className="text-2xl">
                      {data?.todayStats?.totalSales}
                    </span>
                    <div className="flex justify-between items-center">
                      <span>+21%</span>
                      <span className="text-white">Since last month</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-center lg:items-start lg:flex-row gap-2">
                  <div className="flex flex-col justify-between gap-4 bg-indigo-950 p-4 w-full lg:w-[250px] h-[180px] rounded-lg text-amber-200">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Monthly sales</span>
                      <AiOutlineUserAdd className="text-2xl" />
                    </div>
                    <span className="text-2xl">
                      {data?.thisMonthStats?.totalSales}
                    </span>
                    <div className="flex justify-between items-center">
                      <span>+5%</span>
                      <span className="text-white">Since last month</span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-4 bg-indigo-950 p-4 w-full lg:w-[250px] h-[180px] rounded-lg text-amber-200">
                    <div className="flex justify-between items-center">
                      <span className="text-white">Yearly sales</span>
                      <BsStack className="text-2xl" />
                    </div>
                    <span className="text-2xl">{data?.yearlySalesTotal}</span>
                    <div className="flex justify-between items-center">
                      <span>+43%</span>
                      <span className="text-white">Since last month</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-indigo-950 rounded-lg w-full">
                <OverviewChart view="sales" isDashboard={true} />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between gap-4">
              <div className="w-full">
                <ReactDataGrid
                  idProperty="id"
                  columns={columns}
                  dataSource={gridData || {}}
                  enableColumnAutosize
                  style={gridStyle}
                  theme="blue-dark"
                  pagination
                  defaultLimit={10}
                  rowHeight={60}
                  rowIndexColumn
                />
              </div>
              <div className=" bg-indigo-950 w-full rounded-lg flex justify-center items-center">
                <BreakdownChart isDashboard={true} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
