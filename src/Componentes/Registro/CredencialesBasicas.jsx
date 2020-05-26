import React from "react";
import Grid from "@material-ui/core/Grid";

import {
  CustomTextField,
  CustomTypographyTitle,
} from "../CustomComponents/CustomComponents";

export default function PaymentForm() {
  return (
    <>
      <CustomTypographyTitle align='center' variant='h6' gutterBottom>
        Credenciales Basicas
      </CustomTypographyTitle>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <CustomTextField required id='usuario' label='Usuario' fullWidth />
        </Grid>
        <Grid item xs={12} md={6}>
          <CustomTextField required id='correo' label='Correo' fullWidth />
        </Grid>
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
    </>
  );
}
