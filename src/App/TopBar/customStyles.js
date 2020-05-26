import { makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const topBarStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    background: "transparent",
    boxShadow: "none",
    // boxSizing: "border-box",
    // opacity: 0,
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    boxSizing: "border-box",
    // opacity: 0,
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // color: "black",
  },
  buttonGroup: {
    color: "white",
  },
}));

export { topBarStyles };
