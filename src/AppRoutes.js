import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { authContext } from "./contexts/AuthContext";
import Navbar from "./components/Nav";
import LandingPage from "./pages/LandingPage";
import DashboardPage from "./pages/DashboardPage";

const AppRoutes = () => {
  const { auth } = React.useContext(authContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {auth.id ? (
          <AuthenticatedAppRoutes />
        ) : (
          <AuthenticatedAppRoutes />
          // Uncomment this when ready to implement authentication
          // <UnauthenticatedAppRoutes />
        )}
      </Switch>
    </BrowserRouter>
  );
};

const UnauthenticatedAppRoutes = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={LandingPage} />
    </React.Fragment>
  );
};

const AuthenticatedAppRoutes = () => {
  return (
    <React.Fragment>
      <Route exact path="/" component={DashboardPage} />
    </React.Fragment>
  );
};

export default AppRoutes;