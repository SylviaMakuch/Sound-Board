import React from "react";
import ReactDOM from 'react-dom';
import "@fontsource/rock-salt";
import "@fontsource/yeseva-one";
import "@fontsource/poppins";
import { AudioProvider } from "./components/audioplayerprovider";


const App = () => {
    return (
       <AudioProvider></AudioProvider>
    )
}
ReactDOM.render(<App />, document.getElementById('react-container'));