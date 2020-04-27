import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../../Componentes/Home/Home';
import NotFound from '../../Componentes/PantallasError/404';

import { Routes } from '../Routes';

export default function Inicio(){
  return(
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/home">
        <Redirect to="/" />
      </Route>
      {Object.keys(Routes).map((text, idx) => {
        return (
          <Route key={idx} path={`/${text}`}>
            {text !== "Home" ? Routes[text].route : null}
          </Route>
        );
      })}
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  ); 
}