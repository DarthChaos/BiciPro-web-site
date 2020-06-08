import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import NotFound from "../../Componentes/PantallasError/404";

import { NonProtectedRoutes, ProtectedRoutes } from "../Routes";
import { SessionContext } from "../../Contextos/SessionContext";

export default function Router() {
  const { authentication } = useContext(SessionContext);

  const renderRoutes = (routes) =>
    Object.keys(routes).map((text, idx) => {
      return (
        <Route
          key={idx}
          exact
          path={routes[text].path}
          children={routes[text].children}
        />
      );
    });

  return (
    <Switch>
      {authentication === false
        ? renderRoutes(NonProtectedRoutes)
        : renderRoutes(ProtectedRoutes)}
      <Route path='*' children={<NotFound />} />
    </Switch>
  );
}
