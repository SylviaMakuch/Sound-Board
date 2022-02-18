import React from "react";
import ReactDOM from 'react-dom';
import "@fontsource/rock-salt";
import "@fontsource/yeseva-one";
import "@fontsource/poppins";
import { Beatsplayer } from "./components/beats/beatsplayer";
import { Melodyplayer } from "./components/melody/melodyplayer";
import { Bassplayer } from "./components/bass/bassplayer";

const App = () => {
    return (
        <>
            <Beatsplayer />
            <Melodyplayer />
            <Bassplayer />
        </>
    )
}
ReactDOM.render(<App />, document.getElementById('react-container'));