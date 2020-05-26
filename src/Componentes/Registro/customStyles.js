import { makeStyles } from "@material-ui/core/styles";
import dpi from "../../assets/images/dummy_profile.png";

const TermsCondStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
  profileDiv: {
    textAlign: "center",
  },
  inputImage: {
    display: "none",
  },
  buttonImage: {
    position: "relative",
    width: 200,
    height: 200,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 100,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  focusVisible: {},
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
    backgroundImage: `url(${dpi})`,
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
    }px`,
  },
  imageMarked: {
    height: 2,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  profileImageLabel: {
    color: "rgba(256, 256, 256, 0.54)",
    fontSize: "0.875rem",
    lineHeight: 1.43,
    letterSpacing: "0.01071em",
  },
  checkboxLabel: {
    color: "rgba(256, 256, 256, 0.8)",
  },
  checkboxLabelWarning: {
    color: "rgba(256, 256, 256, 0.8)",
    marginTop: "9px",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  modalLink: {
    color: "rgba(97, 218, 251, 0.8)",
  },
}));

const registroStyles = makeStyles((theme) => ({
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

const principalRegistrosStyle = makeStyles((theme) => ({
  root: {
    color: "rgba(234, 234, 240, 1)",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "rgba(97, 218, 251, 1)",
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
  completed: {
    color: "rgba(97, 218, 251, 1)",
    zIndex: 1,
    fontSize: 18,
  },
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    boxShadow: "none",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
    backgroundColor: "inherit",
  },
  stepper: {
    padding: theme.spacing(3, 0, 5),
    backgroundColor: "inherit",
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
  backButton: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    color: "rgba(256, 256, 256, 1)",
  },
}));

export { registroStyles, principalRegistrosStyle, TermsCondStyles };
