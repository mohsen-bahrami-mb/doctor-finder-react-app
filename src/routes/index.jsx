import { Route, Routes } from 'react-router-dom';

import routes from "@routes/routes";

function AppRoutes() {
    return (<>
         <Routes>
      {routes.map((item, index) => {
        if (item.children) {
          return (
            <Route
              key={index + 1}
              path={item.path}
              element={item.element}
            >
              {item.children.map((nestedItem, nestedIndex) => (
                <Route
                  key={nestedIndex + 1}
                  path={nestedItem.path}
                  element={nestedItem.element}
                />
              ))}
            </Route>
          );
        } else {
          return <Route {...item} key={index + 1} />;
        }
      })}
    </Routes>
    </>);
}

export default AppRoutes;