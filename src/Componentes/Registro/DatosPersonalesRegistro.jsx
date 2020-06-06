import React from "react";

import { CustomTypographyTitle } from "../CustomComponents/CustomComponents";
import DatosPersonales from "../DatosPersonales/DatosPersonales";

const DatosPersonalesRegistro = () => {
  return (
    <>
      <CustomTypographyTitle align='center' variant='h6' gutterBottom>
        Datos Personales
      </CustomTypographyTitle>
      <DatosPersonales />
    </>
  );
};

export default DatosPersonalesRegistro;
