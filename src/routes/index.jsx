import { Routes, Route } from 'react-router-dom';
import routes from "@routes/routes";

function Routes() {
    return (<>
        <Routes>
            {routes.map((item, index) => {
                const route = <Route {...item} key={index + 1} />;
                return route;
            })}
        </Routes>
    </>);
}

export default Routes;