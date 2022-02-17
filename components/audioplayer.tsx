import React from "react"
import styled from "styled-components";
import { useAudioPlayer } from "react-use-audio-player"

const Button = styled.button`
    width: 220px;
    height: 50px;
    border: none;
    font-family: Yeseva One, sans-serif;
    font-size: 30px;
    outline: none;
    color: #e13b91;
    /* background: #111; */
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;


&:before {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 5px;
}

&:focus {
background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00);
}

&:focus:after {
    background: transparent;
}

&:hover:before {
    opacity: 1;
}

&:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    left: 0;
    top: 0;
    border-radius: 10px;
}

&.success {
    content: '';
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 5px;
}
`

interface AboutPlayerProperties {
    title: String;
    src: File;
};

const AudioPlayer = ({ title, src }: AboutPlayerProperties) => {
    const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
        src,
        format: "mp3",
        autoplay: false,
        onend: () => console.log("sound has ended!")
    })

    if (!ready && !loading) return <div>No audio to play</div>
    if (loading) return <div>Loading audio</div>

    return (
        <div>
            <h3>{title}</h3>
            <Button onClick={togglePlayPause}>{playing ? "Pause" : "Play"}</Button>
        </div>
    )
};
export default AudioPlayer