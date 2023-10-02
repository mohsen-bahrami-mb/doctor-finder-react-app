import Bookmarks from "../pages/dashboard/bookmarks/Bookmarks";
import DashboardPage from "../pages/dashboard/DashboardPage";
import Home from "../pages/homPage/Home";
import Oppontments from "../pages/dashboard/oppointments/Oppontments";
import SearchPage from "../pages/search/SearchPage";
import SubUsers from "../pages/dashboard/subusers/SubUsers";
const nestedDashboardRoutes = [
  { path: "/dashboard/appointments/", element: <Oppontments /> },
  { path: "/dashboard/bookmarks/", element: <Bookmarks /> },
  { path: "/dashboard/subuser/", element: <SubUsers /> },
];
const homeRoutes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/dashboard", element: <DashboardPage />, children: nestedDashboardRoutes },
];

const routes = [...homeRoutes];

export default routes;
