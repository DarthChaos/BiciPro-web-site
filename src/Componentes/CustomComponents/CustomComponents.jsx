import React from "react";
import {
  Checkbox,
  Button,
  TextField,
  Typography,
  StepConnector,
  Card,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const highWhite = "rgba(256, 256, 256, 1)";
const midWhite = "rgba(256, 256, 256, 0.54)";
const lowWhite = "rgba(256, 256, 256, 0.34)";
const highAquamarine = "rgba(97, 218, 251, 1)";

const CustomTextField = withStyles({
  root: {
    "& label": {
      color: midWhite,
    },
    "& label.Mui-disabled": {
      color: midWhite,
    },
    "& label.Mui-focused": {
      color: lowWhite,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: highWhite,
    },
    "& .MuiInputBase-root": {
      color: highWhite,
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: midWhite,
      },
      "&:hover fieldset": {
        borderColor: highWhite,
      },
      "&.Mui-focused fieldset": {
        borderColor: lowWhite,
      },
    },
    "& .MuiInput-underline": {
      "&:before": {
        borderBottomColor: midWhite,
      },
      "&:hover:before": {
        borderBottomColor: highWhite,
      },
      "&:after": {
        borderBottomColor: lowWhite,
      },
    },
  },
})(TextField);

const CustomCheckBox = withStyles({
  root: {
    color: midWhite,
  },
  checked: {
    color: highWhite,
  },
})((props) => <Checkbox color='default' {...props} />);

const CustomSubmitButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(highAquamarine),
    backgroundColor: "rgba(97, 218, 251, 0.54)",
    "&:hover": {
      backgroundColor: highAquamarine,
    },
  },
}))(Button);

const CustomBackButton = withStyles((theme) => ({
  root: {
    color: highWhite,
    "&:hover": {
      backgroundColor: "rgba(159, 165, 167, 0.54)",
    },
  },
}))(Button);

const CustomTypographyTitle = withStyles(() => ({
  root: {
    color: highWhite,
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
      borderColor: highAquamarine,
    },
  },
  completed: {
    "& $line": {
      borderColor: highAquamarine,
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const CustomCard = withStyles({
  root: {
    backgroundColor: "#282c34",
    boxShadow: "none",
    "& .MuiCardHeader-root": {
      padding: "16px 16px 0px 16px",
      display: "grid",
      "& .MuiCardHeader-content": {
        "& .MuiTypography-h5": {
          color: highWhite,
        },
        "& .MuiTypography-colorTextSecondary": {
          color: midWhite,
        },
      },
    },
  },
})(Card);

export {
  CustomCheckBox,
  CustomSubmitButton,
  CustomBackButton,
  CustomTextField,
  CustomTypographyTitle,
  QontoConnector,
  CustomCard,
};
