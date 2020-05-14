import React from "react";

import { Redirect } from "react-router-dom";

import HomeIcon from "@material-ui/icons/Home";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";

import Inicio from "../Componentes/Inicio/Inicio";
import Registro from "../Componentes/Registro/Registro";
import Bicicletas from "../Componentes/Bicicletas/Bicicletas";
import About from "../Componentes/Home/About";
import Mision from "../Componentes/Home/Mision";
import Vision from "../Componentes/Home/Vision";

// Routes without authorization
export const Routes = {
  Home: { route: <Redirect to='/' />, icon: <HomeIcon /> },
  Inicio: { route: <Inicio />, icon: <LockOpenIcon /> },
  About: { route: <About />, icon: <LockOpenIcon /> },
  Mision: { route: <Mision />, icon: <LockOpenIcon /> },
  Vision: { route: <Vision />, icon: <LockOpenIcon /> },
  Registro: { route: <Registro />, icon: <PersonAddIcon /> },
  Bicicletas: { route: <Bicicletas />, icon: <DirectionsBikeIcon /> },
};
