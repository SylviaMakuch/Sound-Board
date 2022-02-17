import React from "react";
import AudioPlayer from "./audioplayer";
import { AudioPlayerProvider } from "react-use-audio-player";
import { Beatsdata } from "./beatsconfig";
import { title } from "process";

export const AudioProvider = () => {

    return (
        <AudioPlayerProvider>
            {
                Beatsdata.map(({ title, src }, index) => {
                    return (<AudioPlayer title={title} src={src} key={index} />)

                })
            }
        </AudioPlayerProvider>
    );
};