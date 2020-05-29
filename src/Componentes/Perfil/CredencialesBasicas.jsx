import React from "react";
import { Grid, CardHeader, CardContent, CardActions } from "@material-ui/core";

import {
  CustomTextField,
  CustomCard,
  CustomSubmitButton,
} from "../CustomComponents/CustomComponents";

import { perfilStyles as useStyles } from "./customStyles";

const CredencialesBasicas = () => {
  const classes = useStyles();

  return (
    <CustomCard>
      <CardHeader title='Credenciales Basicas' />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CustomTextField required id='usuario' label='Usuario' fullWidth />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              required
              id='correo'
              label='Correo'
              fullWidth
              disabled
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <CustomSubmitButton className={classes.root}>
          Guardar Credenciales
        </CustomSubmitButton>
      </CardActions>
    </CustomCard>
  );
};

export default CredencialesBasicas;
