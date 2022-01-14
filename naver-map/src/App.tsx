import styled from "@emotion/styled";
import React from "react";
import List from "./components/list/List";
import Map from "./components/Map";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;

function App() {
  return (
    <Container>
      <List />
      <Map />
    </Container>
  );
}

export default App;
