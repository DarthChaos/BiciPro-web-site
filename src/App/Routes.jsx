import React from "react";

import {
  Home as HomeIcon,
  LockOpen as LockOpenIcon,
  PersonAdd as PersonAddIcon,
  DirectionsBike as DirectionsBikeIcon,
  Map as MapIcon,
  NotificationImportant as NotificationImportantIcon,
  Call as CallIcon,
  LibraryBooks as LibraryBooksIcon,
  Pageview as PageviewIcon,
  Person as PersonIcon,
} from "@material-ui/icons";

import Home from "../Componentes/Home/Home";
import Inicio from "../Componentes/Inicio/Inicio";
import Registro from "../Componentes/Registro/Registro";
import Bicicletas from "../Componentes/Bicicletas/Bicicletas";
import PerfilBicicleta from "../Componentes/PerfilBicicleta/PerfilBicicleta";
import Maps from "../Componentes/Maps/Maps";
import Perfil from "../Componentes/Perfil/Perfil";

// Routes without authorization
export const NonProtectedRoutes = {
  Home: { path: "/", children: <Home />, icon: <HomeIcon /> },
  Inicio: { path: "/inicio", children: <Inicio />, icon: <LockOpenIcon /> },
  Registro: {
    path: "/registro",
    children: <Registro />,
    icon: <PersonAddIcon />,
  },
};

export const ProtectedRoutes = {
  Home: { path: "/", children: <Home />, icon: <HomeIcon /> },
  "Perfil Seleccionado": {
    path: "/bicicletas/:id",
    children: <PerfilBicicleta />,
    icon: <DirectionsBikeIcon />,
  },
  Bicicletas: {
    path: "/bicicletas",
    children: <Bicicletas />,
    icon: <DirectionsBikeIcon />,
  },
  GPS: {
    path: "/gps",
    children: <Maps />,
    icon: <MapIcon />,
  },
  Emergencias: { path: "/emergencia", icon: <CallIcon /> },
  Blog: { path: "/blog", icon: <LibraryBooksIcon /> },
  Contenidos: { path: "/contenidos", icon: <PageviewIcon /> },
  Perfil: { path: "/perfil", children: <Perfil />, icon: <PersonIcon /> },
};
