import Bookmarks from "../pages/dashboard/bookmarks/Bookmarks";
import DashboardPage from "../pages/dashboard/DashboardPage";
import DoctorPage from "../pages/doctor/DoctorPage";
import Home from "../pages/homPage/Home";
import Oppontments from "../pages/dashboard/oppointments/Oppontments";
import SearchPage from "../pages/search/SearchPage";
import SubUsers from "../pages/dashboard/subusers/SubUsers";
import Visit from "../pages/dashboard/bookmarks/Visit";

const nestedDashboardRoutes = [
  { path: "/dashboard/appointments/", element: <Oppontments /> },
  {
    path: "/dashboard/bookmarks/",
    element: <Bookmarks />,
    children: [{ path: "/dashboard/bookmarks/:visit", element: <Visit /> }],
  },
  { path: "/dashboard/subuser/", element: <SubUsers /> },
];

const homeRoutes = [
  { path: "/", element: <Home /> },
  { path: "/search", element: <SearchPage /> },
  { path: "/:doctor", element: <DoctorPage /> },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    children: nestedDashboardRoutes,
  },
];

const routes = [...homeRoutes];

export default routes;
