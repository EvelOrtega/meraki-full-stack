import React from "react";

import { Default } from "../templates";

import Player from "../organisms/Player";

export default function Aula() {
  /*  React.useEffect(() => {
    fetch("https://62c4e487abea8c085a7e022a.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []); */

  return (
      <Default>
        <Player/>
      </Default>
  );
}
