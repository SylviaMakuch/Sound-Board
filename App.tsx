import React from "react";
import ReactDOM from 'react-dom';
import "@fontsource/rock-salt";
import "@fontsource/yeseva-one";
import "@fontsource/poppins";
import { Beatsplayer } from "./components/beats/beatsplayer";


const App = () => {
    return (
       <Beatsplayer />
    )
}
ReactDOM.render(<App />, document.getElementById('react-container'));