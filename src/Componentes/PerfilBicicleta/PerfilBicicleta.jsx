import React from "react";
import { useParams } from "react-router-dom";

export default function Registro() {
  const { id } = useParams();

  return <h2>{id}</h2>;
}
