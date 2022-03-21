import React, { useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import routes from "./routes";

const App = () => {
  const location = useLocation();
  const history = useNavigate();
  const beforeEach = (pathname: string) => {
    const route = routes.find(
      (route) => route.path.replace(":id", pathname.split("/")[2]) === pathname
    );
    if (typeof route === "undefined") {
      history("/not_found");
      document.title = "Not found";
    } else {
      document.title = route.title;
    }
  };
  useEffect(() => {
    beforeEach(location.pathname);
    // eslint-disable-next-line
  }, [location.pathname]);
  return (
    <Routes>
      {routes.map((route) => {
        const Component = route.component;
        return (
          <Route
            key={route.path}
            path={route.path}
            element={<Component title={route.title} />}
          />
        );
      })}
      <Route path="/" element={<Navigate to="/members" />} />
    </Routes>
  );
};

export default App;
