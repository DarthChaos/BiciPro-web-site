import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import { CustomTypographyTitle } from "../CustomComponents/CustomComponents";
import { SessionContext } from "../../Contextos/SessionContext";

const Agradecimientos = () => {
  const history = useHistory();
  const { setAuthentication } = useContext(SessionContext);

  useEffect(() => {
    setTimeout(() => {
      history.push("/home");
      setAuthentication(true);
    }, 2000);
  }, []);

  return (
    <>
      <CustomTypographyTitle variant='h5' gutterBottom>
        Gracias por registrarse.
      </CustomTypographyTitle>
      <CustomTypographyTitle variant='subtitle1'>
        En un momento sera redireccionado a la pantalla principal, por favor,
        tenga paciencia, se estan guardando sus datos. Gracias por confiar en
        nosotros.
      </CustomTypographyTitle>
    </>
  );
};

export default Agradecimientos;
