import React, { useState } from "react";
import {
  Grid,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@material-ui/core";

import { CustomTextField } from "../CustomComponents/CustomComponents";

import { datosPersonalesStyle as useStyles } from "./customStyles";

export default function DatosPersonales() {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const [city, setCity] = useState("Bogota");

  const handleSelectorChange = (e) => {
    setAge(e.target.value);
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <CustomTextField
          required
          id='nombreCompleto'
          name='nombreCompleto'
          label='Nombre completo'
          fullWidth
          autoComplete='nombre'
        />
      </Grid>
      <Grid item xs={3} sm={2}>
        <CustomTextField
          required
          id='edad'
          name='edad'
          label='Edad'
          fullWidth
          autoComplete='edad'
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <FormControl fullWidth>
          <InputLabel
            className={classes.selectorLabel}
            id='tipoIdentificacionLabel'>
            TI *
          </InputLabel>
          <Select
            className={classes.selector}
            labelId='tipoIdentificacionLabel'
            id='tipoIdentificacion'
            value={age}
            onChange={handleSelectorChange}>
            <MenuItem value={"CC"}>CC</MenuItem>
            <MenuItem value={"TI"}>TI</MenuItem>
            <MenuItem value={"CE"}>CE</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={7}>
        <CustomTextField
          required
          id='documento'
          name='documento'
          label='Documento'
          fullWidth
          autoComplete='documento'
        />
      </Grid>
      <Grid item xs={12} sm={8}>
        <CustomTextField
          required
          id='direccion'
          name='direccion'
          label='Direccion'
          fullWidth
          autoComplete='direccion'
        />
      </Grid>
      <Grid item xs={6} sm={4}>
        <FormControl fullWidth disabled>
          <InputLabel
            className={classes.selectorLabel}
            id='tipoIdentificacionLabel'>
            Ciudad
          </InputLabel>
          <Select
            className={classes.selector}
            labelId='tipoIdentificacionLabel'
            id='tipoIdentificacion'
            value={city}
            onChange={handleCityChange}>
            <MenuItem value={"Bogota"}>Bogota</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <CustomTextField
          id='celular'
          name='celular'
          label='Celular'
          fullWidth
          autoComplete='celular'
        />
      </Grid>
    </Grid>
  );
}
