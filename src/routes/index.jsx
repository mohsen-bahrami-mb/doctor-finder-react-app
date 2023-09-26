import { Route, Routes } from 'react-router-dom';

import routes from "@routes/routes";

function AppRoutes() {
    return (<>
        <Routes>
            {routes.map((item, index) => {
                const route = <Route {...item} key={index + 1} />;
                return route;
            })}
        </Routes>
    </>);
}

export default AppRoutes;