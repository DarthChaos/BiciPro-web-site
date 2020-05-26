import React, { useContext, useState, useRef } from "react";
import {
  Avatar,
  CssBaseline,
  FormControlLabel,
  Link,
  Grid,
  Box,
  Container,
} from "@material-ui/core";
import { LockOutlined as LockOutlinedIcon } from "@material-ui/icons";
import { Link as RouterLink, useHistory } from "react-router-dom";

import Copyright from "../Copyright/Copyright";
import { SessionContext } from "../../Contextos/SessionContext";
import {
  CustomCheckBox,
  CustomSubmitButton,
  CustomTextField,
  CustomTypographyTitle,
} from "../CustomComponents/CustomComponents";
import { inicioStyles as useStyles } from "./customStyles";

export default function Inicio() {
  const history = useHistory();
  const userRef = useRef();
  const [checked, setChecked] = useState(false);
  const [values, setValues] = useState({
    user: "",
    pass: "",
  });
  const { setAuthentication } = useContext(SessionContext);
  const classes = useStyles();

  const handlePassword = (e) => {
    console.log(e.target.value);
  };

  const handleCheck = (e) => {
    setChecked(e.target.checked);
  };

  const handleButtonClick = () => {
    history.push("/Home");
    setAuthentication(true);
  };

  return (
    <Container className={classes.currentBody} component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <CustomTypographyTitle
          className={classes.formTitle}
          component='h1'
          variant='h5'>
          Sign in
        </CustomTypographyTitle>
        <form className={classes.form} noValidate>
          <CustomTextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Usuario o Email'
            name='email'
            autoComplete='email'
            autoFocus
          />
          <CustomTextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Contraseña'
            type='password'
            id='password'
            autoComplete='current-password'
            onChange={handlePassword}
          />
          <FormControlLabel
            className={classes.checkboxLabel}
            control={
              <CustomCheckBox
                value='remember'
                checked={checked}
                onChange={handleCheck}
              />
            }
            label='Recordarme'
          />
          <CustomSubmitButton
            type='button'
            fullWidth
            variant='contained'
            className={classes.submit}
            onClick={handleButtonClick}>
            Sign In
          </CustomSubmitButton>
          <Grid container>
            <Grid item xs>
              <Link className={classes.link} href='#' variant='body2'>
                Olvidaste tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link
                className={classes.link}
                component={RouterLink}
                to={"/Registro"}
                variant='body2'>
                {"Tienes una cuenta? Registrate"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
