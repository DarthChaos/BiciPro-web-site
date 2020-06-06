import { makeStyles } from "@material-ui/core/styles";

const datosPersonalesStyle = makeStyles((theme) => ({
  selectorLabel: {
    color: "rgba(256, 256, 256, 0.54)",
    "&.Mui-focused": {
      color: "rgba(256, 256, 256, 0.34)",
    },
    "&.Mui-disabled": {
      color: "rgba(256, 256, 256, 0.34)",
    },
  },
  selector: {
    "&.Mui-disabled": {
      color: "rgba(256, 256, 256, 0.54)",
    },
    "&.MuiInput-underline": {
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
    "& .MuiSelect-icon": {
      color: "rgba(256, 256, 256, 0.54)",
    },
  },
}));

export { datosPersonalesStyle };
