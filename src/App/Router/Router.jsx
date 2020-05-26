import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../../Componentes/Home/Home";
import NotFound from "../../Componentes/PantallasError/404";
import PerfilBicicleta from "../../Componentes/PerfilBicicleta/PerfilBicicleta";

import { Routes } from "../Routes";

export default function Router() {
  return (
    <Switch>
      <Route exact path='/' children={<Home />} />
      <Route path='/Bicicletas/:id' children={<PerfilBicicleta />} />
      {Object.keys(Routes).map((text, idx) => {
        return (
          <Route key={idx} path={`/${text}`} children={Routes[text].route} />
        );
      })}
      <Route path='*' children={<NotFound />} />
    </Switch>
  );
}
