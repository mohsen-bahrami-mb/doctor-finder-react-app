import Home from "../pages/homPage/Home";
import SearchPage from "../pages/search/SearchPage";

const homeRoutes = [
    {path: "/", element: <Home />},
    {path: "/search", element: <SearchPage />},
];

const routes = [
    ...homeRoutes
];

export default routes;