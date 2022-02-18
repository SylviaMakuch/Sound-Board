import React from "react";
import styled from "styled-components";
import { Howl } from 'howler';
import { beatsData } from "./beatsconfig";
import { useState } from "react";

export const Howlerplayer = () => {
    const [activeSound, setActiveSound] = useState(null);

    const createSound = (beat: string) => {
        return new Howl({
            src: beat,
            autoplay: false,
            loop: true,
            volume: 0.5
        });
    }

    const handleClick = (beat: string) => {
        if (activeSound) {
            activeSound.stop();
        }
        const newSound = createSound(beat);
        newSound.play();
        setActiveSound(newSound);
    };

    return (
        <div>
            {
                beatsData.map((beat, index: number) => {
                    return <button key={index} onClick={() => handleClick(beat.src)}>{beat.title}</button>
                })
            }
        </div>
    )
};