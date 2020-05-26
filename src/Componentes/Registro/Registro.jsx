import React from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Button,
  Container,
} from "@material-ui/core";
import { Check } from "@material-ui/icons";
import clsx from "clsx";

import CredencialesBasicas from "./CredencialesBasicas";
import DatosPersonales from "./DatosPersonales";
import TermsCond from "./TermsCond";
import Agradecimientos from "./Agradecimientos";
import Copyright from "../Copyright/Copyright";
import {
  CustomTypographyTitle,
  CustomSubmitButton,
  QontoConnector,
} from "../CustomComponents/CustomComponents";
import { principalRegistrosStyle as useStyles } from "./customStyles";

const QontoStepIcon = (props) => {
  const classes = useStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}>
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <div className={classes.circle} />
      )}
    </div>
  );
};

const steps = ["Basicos", "Personales", "Finalizar"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <CredencialesBasicas />;
    case 1:
      return <DatosPersonales />;
    case 2:
      return <TermsCond />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Registro() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component='main' className={classes.layout}>
      <Paper className={classes.paper}>
        <CustomTypographyTitle component='h1' variant='h4' align='center'>
          Registro
        </CustomTypographyTitle>
        <Stepper
          alternativeLabel
          activeStep={activeStep}
          className={classes.stepper}
          connector={<QontoConnector />}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel StepIconComponent={QontoStepIcon}>
                <CustomTypographyTitle>{label}</CustomTypographyTitle>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <Agradecimientos />
          ) : (
            <>
              {getStepContent(activeStep)}
              <div className={classes.buttons}>
                {activeStep !== 0 && (
                  <Button
                    onClick={handleBack}
                    className={(classes.button, classes.backButton)}>
                    Atras
                  </Button>
                )}
                <CustomSubmitButton
                  variant='contained'
                  onClick={handleNext}
                  className={classes.button}>
                  {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
                </CustomSubmitButton>
              </div>
            </>
          )}
        </>
      </Paper>
      <Copyright />
    </Container>
  );
}
