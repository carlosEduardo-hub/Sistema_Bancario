import React, { useContext } from "react";
import * as C from "./styles";
import { LogOut } from "lucide-react";
import { AuthContext } from "../../contexts/auth";
import Logo from "../../assets/logo.png";

const Header = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <C.Container>
      <C.Header>
        <C.LogoContainer>
          <C.Logo src={Logo} alt="logo" />
        </C.LogoContainer>
        <C.Title>Venda Mais Bank</C.Title>
        <C.Logout>
          <LogOut size={30} onClick={handleLogout} />
        </C.Logout>
      </C.Header>
    </C.Container>
  );
};

export default Header;
