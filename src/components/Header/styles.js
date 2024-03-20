import styled from "styled-components";

export const Container = styled.div`
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

export const Header = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 180px;
`;

export const Logo = styled.img`
  width: 100%;
  height: auto;
`;

export const Title = styled.div`
  color: #23ce6b;
  text-align: center;
  font-size: x-large;
`;

export const Logout = styled.div`
  color: #8A2BE2;
  margin-right: 6px;
  cursor: pointer;
`;
