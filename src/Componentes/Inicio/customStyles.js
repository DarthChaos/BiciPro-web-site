import { makeStyles } from "@material-ui/core/styles";

const inicioStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(97, 218, 251, 0.8)",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    // color: "#61dafb",
  },
  checkboxLabel: {
    color: "rgba(256, 256, 256, 0.8)",
  },
  link: {
    color: "rgba(97, 218, 251, 0.8)",
  },
}));

export { inicioStyles };
