import React from "react";
import { CardHeader, CardContent, CardActions } from "@material-ui/core";

import DatosPersonales from "../DatosPersonales/DatosPersonales";
import {
  CustomCard,
  CustomSubmitButton,
} from "../CustomComponents/CustomComponents";

import { perfilStyles as useStyles } from "./customStyles";

const DatosPersonalesPerfil = () => {
  const classes = useStyles();

  return (
    <CustomCard>
      <CardHeader title='Datos Personales' />
      <CardContent>
        <DatosPersonales />
      </CardContent>
      <CardActions>
        <CustomSubmitButton className={classes.root}>
          Guardar Datos
        </CustomSubmitButton>
      </CardActions>
    </CustomCard>
  );
};

export default DatosPersonalesPerfil;
