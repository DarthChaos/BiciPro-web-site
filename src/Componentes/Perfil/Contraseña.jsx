import React from "react";
import { Grid, CardHeader, CardContent, CardActions } from "@material-ui/core";

import {
  CustomTextField,
  CustomCard,
  CustomSubmitButton,
} from "../CustomComponents/CustomComponents";

import { perfilStyles as useStyles } from "./customStyles";

const Contraseña = () => {
  const classes = useStyles();

  return (
    <CustomCard>
      <CardHeader title='Contraseña' />
      <CardContent>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <CustomTextField
              required
              type='password'
              id='password'
              label='Contraseña'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CustomTextField
              required
              type='password'
              id='tryPassword'
              label='Repetir Contraseña'
              fullWidth
            />
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <CustomSubmitButton className={classes.root}>
          Guardar Contraseña
        </CustomSubmitButton>
      </CardActions>
    </CustomCard>
  );
};

export default Contraseña;
