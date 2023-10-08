import {
  AiOutlineShoppingCart,
  AiOutlineTransaction,
  AiOutlineFileDone,
  AiFillCalendar,
  AiFillPieChart,
  AiFillSecurityScan,
  AiFillHome,
} from "react-icons/ai";
import {
  BsFillPeopleFill,
  BsGlobeAmericas,
  BsFillCalendar2MonthFill,
} from "react-icons/bs";

export const sidebarLinks = [
  {
    name: "Dashboard",
    icon: <AiFillHome />,
  },
  {
    name: "Client facing",
    icon: null,
  },
  {
    name: "Products",
    icon: <AiOutlineShoppingCart />,
  },
  {
    name: "Customers",
    icon: <BsFillPeopleFill />,
  },
  {
    name: "Transactions",
    icon: <AiOutlineTransaction />,
  },
  {
    name: "Geography",
    icon: <BsGlobeAmericas />,
  },
  {
    name: "Sales",
    icon: null,
  },
  {
    name: "Overview",
    icon: <AiOutlineFileDone />,
  },
  {
    name: "Daily",
    icon: <AiFillCalendar />,
  },
  {
    name: "Monthly",
    icon: <BsFillCalendar2MonthFill />,
  },
  {
    name: "Breakdown",
    icon: <AiFillPieChart />,
  },
  {
    name: "Management",
    icon: null,
  },
  {
    name: "Admin",
    icon: <AiFillSecurityScan />,
  },
];
