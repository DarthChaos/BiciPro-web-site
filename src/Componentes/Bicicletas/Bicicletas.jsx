import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function NotFound() {
  let { url } = useRouteMatch();

  return (
    <div>
      <h2> Bicicletas </h2>
      <ul>
        {[1, 2, 3].map((bicycle, idx) => {
          return (
            <li key={idx}>
              <Link key={idx} to={`${url}/${bicycle}`}>
                {bicycle}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
