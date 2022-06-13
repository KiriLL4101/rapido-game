import React from "react";
import styled from "styled-components";
import Rapido from "./RapidoComponent/Rapido";

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;

const App: React.FC = () => {
  return (
    <Container>
      <Rapido />
    </Container>
  );
};

export default App;
