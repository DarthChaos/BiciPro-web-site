import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Link } from "@material-ui/core";

import { copyritghtStyles as useStyles } from "./customStyles";

export default function Copyright() {
  const classes = useStyles();

  return (
    <Typography className={classes.label} variant='body2' align='center'>
      {"Copyright © "}
      <Link component={RouterLink} to='/' color='inherit'>
        BiciPro
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
