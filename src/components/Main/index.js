import styled from "styled-components";

const MainSyled = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Main({ children }) {
  return <MainSyled>{children}</MainSyled>;
}
