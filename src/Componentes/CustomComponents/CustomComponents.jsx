import React from "react";
import {
  Checkbox,
  Button,
  TextField,
  Typography,
  StepConnector,
  Badge,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const CustomTextField = withStyles({
  root: {
    "& label": {
      color: "rgba(256, 256, 256, 0.54)",
    },
    "& label.Mui-focused": {
      color: "rgba(256, 256, 256, 0.34)",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "white",
    },
    "& .MuiInputBase-root": {
      color: "rgba(256, 256, 256, 1)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(256, 256, 256, 0.54)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(256, 256, 256, 1)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(256, 256, 256, 0.34)",
      },
    },
    "& .MuiInput-underline": {
      "&:before": {
        borderBottomColor: "rgba(256, 256, 256, 0.54)",
      },
      "&:hover:before": {
        borderBottomColor: "rgba(256, 256, 256, 1)",
      },
      "&:after": {
        borderBottomColor: "rgba(256, 256, 256, 0.34)",
      },
    },
  },
})(TextField);

const CustomCheckBox = withStyles({
  root: {
    color: "rgba(256, 256, 256, 0.54)",
  },
  checked: {
    color: "rgba(256, 256, 256, 1)",
  },
})((props) => <Checkbox color='default' {...props} />);

const CustomSubmitButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText("rgba(97, 218, 251, 1)"),
    backgroundColor: "rgba(97, 218, 251, 0.54)",
    "&:hover": {
      backgroundColor: "rgba(97, 218, 251, 1)",
    },
  },
}))(Button);

const CustomTypographyTitle = withStyles(() => ({
  root: {
    color: "rgba(256, 256, 256, 1)",
  },
}))(Typography);

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "rgba(97, 218, 251, 1)",
    },
  },
  completed: {
    "& $line": {
      borderColor: "rgba(97, 218, 251, 1)",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

export {
  CustomCheckBox,
  CustomSubmitButton,
  CustomTextField,
  CustomTypographyTitle,
  QontoConnector,
};
