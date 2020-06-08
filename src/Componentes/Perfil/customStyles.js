import { makeStyles } from "@material-ui/core/styles";

const perfilStyles = makeStyles((theme) => ({
  root: {
    marginLeft: "auto",
  },
  header: {
    padding: "16px",
    "& .MuiCardHeader-avatar": {
      margin: "0px auto",
      marginRight: "auto",
    },
  },
  avatarButton: {
    "& .MuiAvatar-root": {
      width: "100px",
      height: "100px",
    },
  },
  content: {
    display: "grid",
    justifyContent: "center",
  },
  text: {
    margin: "10px",
    textAlign: "center",
  },
  description: {
    color: "rgba(256, 256, 256, 0.54)",
  },
  actions: {
    display: "grid",
  },
  modalCard: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: 400,
    backgroundColor: "#424242",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4),
    textAlign: "center",
  },
  image: {
    display: "table",
    margin: "10px auto",
    height: "50vh",
    width: "100%",
  },
  modalActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

export { perfilStyles };
