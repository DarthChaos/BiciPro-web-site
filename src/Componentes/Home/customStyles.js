import { makeStyles } from "@material-ui/core/styles";

const topButtons = {
  GPS: { color: "#324e5c" },
  Emergencias: { color: "#79bae0" },
  Blog: { color: "#6f61c2" },
  Contenidos: { color: "#5283c6" },
  Perfil: { color: "#000000" },
  Bicicletas: { color: "#000000" },
};

const protectedStyles = makeStyles((theme) => ({
  root: {
    flexGrow: "flex",
  },
  content: {
    flexGrow: 1,
    height: "100%",
    overflow: "auto",
  },
  container: {
    padding: theme.spacing(4),
  },
  button: {
    backgroundColor: "rgba(256, 256, 256, 0.6)",
    color: "rgba(40, 44, 52, 0.9)",
    width: "100%",
    borderRadius: "5px",
    padding: theme.spacing(2),
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "600",
    fontFamily: "inherit",
    transition: "padding 1s ease-in-out",
  },
  topButton: {
    height: "50vh",
    "&:hover, &$focusTopButtonVisible": {
      zIndex: 1,
      padding: "1vh 16px 46vh 16px",
      "& $decorationTopButton": {
        height: "90%",
      },
      "& $topButtonIcon": {
        opacity: 1,
      },
    },
  },
  focusTopButtonVisible: {},
  decorationTopButton: {
    left: "0%",
    bottom: "0%",
    width: "100%",
    height: "60px",
    borderRadius: "0px 0px 5px 5px",
    position: "absolute",
    opacity: 0.8,
    transition: "height 1s cubic-bezier(0.45, 0.05, 0.55, 0.95)",
  },
  icon: {
    color: "rgba(256, 256, 256, 0.6)",
    position: "absolute",
    opacity: 0,
    transition: "opacity 1.5s cubic-bezier(0.55, 0.09, 0.68, 0.53)",
    "& .MuiSvgIcon-root": {
      fontSize: "90px",
    },
  },
  topButtonIcon: {
    bottom: "35%",
  },
  bottomButton: {
    height: "16vh",
    zIndex: 1,
    "&:hover": {
      "& $decorationBottomLeftButton, & $decorationBottomRightButton": {
        width: "81%",
      },
      "& $bottomLeftButtonIcon, & $bottomRightButtonIcon": {
        opacity: 1,
      },
    },
  },
  leftBottomButton: {
    "&:hover, &$focusLeftBottomButtonVisible": {
      padding: "16px 1vw 16px 31.5vw",
    },
  },
  rightBottomButton: {
    "&:hover, &$focusRightBottomButtonVisible": {
      padding: "16px 31.5vw 16px 1vw",
    },
  },
  focusLeftBottomButtonVisible: {},
  focusRightBottomButtonVisible: {},
  bottomDecorationButton: {
    width: "60px",
    position: "absolute",
    transition: "width 1s cubic-bezier(0.45, 0.05, 0.55, 0.95)",
  },
  decorationBottomLeftButton: {
    left: "0%",
    top: "0%",
    height: "100%",
    borderRadius: "5px 0px 0px 5px",
    backgroundColor: "#000000",
  },
  decorationBottomRightButton: {
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: "0px 5px 5px 0px",
    backgroundColor: "#000000",
  },
  bottomLeftButtonIcon: {
    left: "35%",
  },
  bottomRightButtonIcon: {
    right: "35%",
  },
}));

export { protectedStyles, topButtons };
