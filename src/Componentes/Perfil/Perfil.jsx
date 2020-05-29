import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

import CredencialesBasicas from "./CredencialesBasicas";
import Contraseña from "./Contraseña";
import DatosPersonalesPerfil from "./DatosPersonalesPerfil";
import FotoArea from "./FotoArea";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4),
  },
}));

const Perfil = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={4}>
          <FotoArea />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={10}>
              <CredencialesBasicas />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={10}>
              <Contraseña />
            </Grid>
            <Grid item xs={12} sm={12} md={8} lg={8} xl={10}>
              <DatosPersonalesPerfil />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Perfil;
