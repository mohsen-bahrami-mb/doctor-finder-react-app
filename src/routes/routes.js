import Home from "../components/homPage/Home";
import SearchPage from "../components/search/SearchPage";

const homeRoutes = [
    {path: "/", element: <Home />},
    {path: "/search", element: <SearchPage />},
];

const routes = [
    ...homeRoutes
];

export default routes;