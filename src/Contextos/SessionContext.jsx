import React, { createContext, useState, useEffect } from "react";

export const SessionContext = createContext();

const SessionContextProvider = ({ children }) => {
  const [authentication, setAuthentication] = useState(false);

  const values = {
    authentication,
    setAuthentication,
  };

  return (
    <SessionContext.Provider value={values}>{children}</SessionContext.Provider>
  );
};

export default SessionContextProvider;
