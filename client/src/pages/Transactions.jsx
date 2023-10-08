/* eslint-disable react/prop-types */
import Header from "../components/Header";
import { useFetchTransactionsQuery } from "../store/api";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import "@inovua/reactdatagrid-community/base.css";
import "@inovua/reactdatagrid-community/theme/blue-dark.css";

const Transactions = ({ isSidebarOpen, screenSize }) => {
  const { data } = useFetchTransactionsQuery();
  const gridData = data?.map((data) => {
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
    <div className="overflow-y-scroll">
      {(!isSidebarOpen || screenSize > 768) && (
        <div className="p-8 h-[calc(100vh-104px)]">
          <Header
            title={"Transactions"}
            subtitle={"Entire list of transactions"}
          />
          <div className="mt-8">
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
        </div>
      )}
    </div>
  );
};

export default Transactions;
