import styled from "styled-components";

const Pstyle = styled.p`
  font-size: 25px;
  font-weight: bold;
  color: ${(prop) => (prop.isSucess ? `#67B929;` : `#F5494D;`)};
`;

export function Display({ isSucess }) {
  const message = isSucess ? "Requisição completa!" : "requisição falhou!";
  return (
    <>
      <Pstyle isSucess={isSucess}>{message}</Pstyle>
    </>
  );
}
