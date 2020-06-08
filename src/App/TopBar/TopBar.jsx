import React, { useState, useContext } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import clsx from "clsx";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";

import { ArrowBackIos as ArrowBackIosIcon } from "@material-ui/icons";

import { SessionContext } from "../../Contextos/SessionContext";
import { topBarStyles as useStyles } from "./customStyles";
import "./TopBar.scss";

export default function TopBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const { authentication, setAuthentication } = useContext(SessionContext);

  let { pathname } = useLocation();
  const { goBack } = useHistory();

  const pageName = pathname.split("/")[1];

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position='static'
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}>
        <Toolbar>
          {pageName.length !== 0 ? (
            <IconButton
              onClick={() => goBack()}
              color='inherit'
              edge='start'
              aria-label='atras'>
              <ArrowBackIosIcon />
            </IconButton>
          ) : null}
          <Typography variant='h6' className={classes.title} noWrap>
            {pageName}
          </Typography>
          {authentication === false ? (
            <div>
              {pageName.length === 0 ? (
                <div>
                  <Button
                    className={classes.buttonGroup}
                    component={Link}
                    to='/inicio'>
                    Login
                  </Button>
                  <Button
                    className={classes.buttonGroup}
                    component={Link}
                    to='/registro'>
                    Registro
                  </Button>
                </div>
              ) : null}
            </div>
          ) : (
            <>
              <Button
                className={classes.buttonGroup}
                component={Link}
                onClick={() => setAuthentication(false)}
                to='/'>
                Log Out
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
