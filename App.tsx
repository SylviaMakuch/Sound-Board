import React from "react";
import ReactDOM from 'react-dom';
import "@fontsource/rock-salt";
import "@fontsource/yeseva-one";
import "@fontsource/poppins";
import BassContainer from "./components/bass/bass";

export default function App() {
    return (
      <div>
          <BassContainer></BassContainer>
      </div>
    )
}
ReactDOM.render(<App />, document.getElementById('react-container'));