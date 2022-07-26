import React from "react";

import { Default } from "../templates";

import { AppLoading } from "../organisms";
import Player from "../organisms/Player";

export default function Aula() {
  const [isLoading, setIsLoading] = React.useState(false);

  /*  React.useEffect(() => {
    fetch("https://62c4e487abea8c085a7e022a.mockapi.io/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []); */

  return isLoading ? (
    <AppLoading />
  ) : (
    <Default>
      <Player></Player>
    </Default>
  );
}
