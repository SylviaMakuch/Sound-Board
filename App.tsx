import React from "react";
import ReactDOM from 'react-dom';
import "@fontsource/rock-salt";
import "@fontsource/yeseva-one";
import "@fontsource/poppins";
import { Howlerplayer } from "./components/howlerplayer";


const App = () => {
    return (
       <Howlerplayer />
    )
}
ReactDOM.render(<App />, document.getElementById('react-container'));