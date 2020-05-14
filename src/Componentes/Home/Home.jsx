import React, { useContext } from "react";

import NonProtected from "./NonProtected";
import Protected from "./Protected";

import { SessionContext } from "../../Contextos/SessionContext";

import "../../App/App";

export default function Home() {
  const { authentication } = useContext(SessionContext);

  return (
    <div className='page'>
      {authentication === false ? <NonProtected /> : <Protected />}
    </div>
  );
}
