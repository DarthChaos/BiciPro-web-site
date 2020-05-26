import React from "react";

import { Grid, Paper, ButtonBase } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Protected = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <ButtonBase className={classes.paper}>xs=6</ButtonBase>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Protected;
