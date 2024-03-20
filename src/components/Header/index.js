import React, { useContext } from "react";
import * as C from "./styles";

import { AuthContext } from "../../contexts/auth";

const Header = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };


  return (
    <C.Container>
      <C.Header>
        <C.Title>Controle Financeiro</C.Title>
        <button onClick={handleLogout}>Logout</button>
      </C.Header>
    </C.Container>
  );
};

export default Header;
