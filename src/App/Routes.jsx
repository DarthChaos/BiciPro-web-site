import React from 'react';

import HomeIcon from '@material-ui/icons/Home';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import Home from '../Componentes/Home/Home';
import Inicio from '../Componentes/Inicio/Inicio';
import Registro from '../Componentes/Registro/Registro';

// Routes without authorization
export const Routes = {
  Home: {route: <Home />, icon: <HomeIcon />},
  Inicio: {route: <Inicio />, icon: <LockOpenIcon />},
  Registro: {route: <Registro />, icon: <PersonAddIcon />},
};