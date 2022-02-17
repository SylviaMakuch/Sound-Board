import React from "react";
import ReactDOM from 'react-dom';
import "@fontsource/rock-salt";
import "@fontsource/yeseva-one";
import "@fontsource/poppins";
import "@fontsource/shadows-into-light";
import AudioPlayer from "./components/audioplayer"
import { AudioPlayerProvider } from "react-use-audio-player"
import bouncybass from "./sounds/bouncybass.mp3";

const App = () => {
    return (
        <AudioPlayerProvider>
            <AudioPlayer file={bouncybass} />
        </AudioPlayerProvider>
    )
}
ReactDOM.render(<App />, document.getElementById('react-container'));