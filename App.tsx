import React from "react";
import ReactDOM from 'react-dom';
import "@fontsource/rock-salt";
import "@fontsource/yeseva-one";
import "@fontsource/poppins";
import MusicBox from "./components/musicbox";

export default function App() {
    return (
      <div>
          <MusicBox />
      </div>
    )
}
ReactDOM.render(<App />, document.getElementById('react-container'));