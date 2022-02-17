import React from "react";
import ReactDOM from 'react-dom';
import "@fontsource/rock-salt";
import "@fontsource/yeseva-one";
import "@fontsource/poppins";
import "@fontsource/shadows-into-light";
import { AudioPlayerProvider } from "react-use-audio-player"


const App = () => {
    return (
        <AudioPlayerProvider>
        </AudioPlayerProvider>
    )
}
ReactDOM.render(<App />, document.getElementById('react-container'));