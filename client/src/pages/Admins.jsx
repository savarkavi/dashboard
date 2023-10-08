import Header from "../components/Header";
import { useFetchAdminsQuery } from "../store/api";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/index.css";
import "@inovua/reactdatagrid-community/base.css";
import "@inovua/reactdatagrid-community/theme/blue-dark.css";

const Admins = () => {
  const { data } = useFetchAdminsQuery();
  const gridStyle = { minHeight: 700 };

  const columns = [
    { name: "_id", header: "Id", defaultFlex: 1 },
    { name: "name", header: "Name", defaultFlex: 1 },
    { name: "email", header: "Email", defaultFlex: 1 },
    { name: "phoneNumber", header: "Phone Number", defaultFlex: 1 },
    { name: "country", header: "Country", defaultFlex: 1 },
    { name: "occupation", header: "Occupation", defaultFlex: 1 },
    { name: "role", header: "Role", defaultFlex: 1 },
  ];

  return (
    <div>
      <div className="p-8 h-[calc(100vh-104px)]">
        <Header
          title={"Admins"}
          subtitle={"Managing admins and list of admins"}
        />
        <div className="mt-8">
          <ReactDataGrid
            idProperty="id"
            columns={columns}
            dataSource={data || {}}
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
    </div>
  );
};

export default Admins;
