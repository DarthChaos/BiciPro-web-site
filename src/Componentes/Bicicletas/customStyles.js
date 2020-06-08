import { makeStyles } from "@material-ui/core/styles";

const bicicletasStyles = makeStyles((theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  quitButton: {
    color: "rgba(97, 218, 251, 0.54)",
    border: "1px solid rgba(97, 218, 251, 0.54)",
    "&:hover": {
      color: "rgba(97, 218, 251, 1)",
      border: "1px solid rgba(97, 218, 251, 1)",
    },
  },
  actionButton: {
    color: "#282c34",
  },
}));

export { bicicletasStyles };
