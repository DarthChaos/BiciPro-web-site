import React from "react";
import { Grid, ButtonBase, Container } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import clsx from "clsx";

import { protectedStyles as useStyles, topButtons } from "./customStyles";
import { ProtectedRoutes as Routes } from "../../App/Routes";

const Protected = () => {
  const classes = useStyles();
  const { push } = useHistory();

  return (
    <main className={classes.content}>
      <Container maxWidth='xl' className={classes.container}>
        <Grid container spacing={8} justify='center'>
          {Object.keys(topButtons).map((key) => {
            if (!["Perfil", "Bicicletas"].includes(key)) {
              return (
                <Grid key={key} item xs={6} sm={6} md={3} lg={2} xl={2}>
                  <ButtonBase
                    className={clsx(classes.topButton, classes.button)}
                    focusVisibleClassName={classes.focusTopButtonVisible}
                    onClick={() => push(Routes[key].path)}>
                    {key}
                    <span
                      className={classes.decorationTopButton}
                      style={{ backgroundColor: topButtons[key].color }}
                    />
                    <span className={clsx(classes.topButtonIcon, classes.icon)}>
                      {Routes[key].icon}
                    </span>
                  </ButtonBase>
                </Grid>
              );
            }
          })}
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <ButtonBase
              className={clsx(
                classes.bottomButton,
                classes.leftBottomButton,
                classes.button
              )}
              focusVisibleClassName={classes.focusLeftBottomButtonVisible}
              onClick={() => push(Routes.Perfil.path)}>
              Perfil
              <span
                className={clsx(
                  classes.decorationBottomLeftButton,
                  classes.bottomDecorationButton
                )}
              />
              <span
                className={clsx(classes.bottomLeftButtonIcon, classes.icon)}>
                {Routes.Perfil.icon}
              </span>
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
            <ButtonBase
              className={clsx(
                classes.bottomButton,
                classes.rightBottomButton,
                classes.button
              )}
              focusVisibleClassName={classes.focusRightBottomButtonVisible}
              onClick={() => push(Routes.Bicicletas.path)}>
              Bicicletas
              <span
                className={clsx(
                  classes.decorationBottomRightButton,
                  classes.bottomDecorationButton
                )}
              />
              <span
                className={clsx(classes.bottomRightButtonIcon, classes.icon)}>
                {Routes.Bicicletas.icon}
              </span>
            </ButtonBase>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
};

export default Protected;
