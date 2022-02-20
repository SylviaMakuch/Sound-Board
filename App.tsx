import React from "react";
import ReactDOM from 'react-dom';
import styled from "styled-components";
import "@fontsource/rock-salt";
import "@fontsource/yeseva-one";
import MusicBox from "./components/musicbox";

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-content: center;
`;

export default function App() {
  return (
    <Container>
      <MusicBox />
    </Container>
  )
}
ReactDOM.render(<App />, document.getElementById('react-container'));