import React from "react";
import styled from "styled-components";
import { Howl } from 'howler';
import { beatsData } from "./beatsconfig";
import { useState } from "react";

const Button = styled.button`
    width: 80px;
    height: 80px;
    border: none;
    font-family: Yeseva One, sans-serif;
    font-size: 10px;
    outline: none;
    color: #e13b91;
    background: #111;
    cursor: pointer;
    z-index: 0;
    border-radius: 10px;
    margin: 5px;

&:before {
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
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
    width: 100%;
    height: 100%;
    background: transparent;
    border-radius: 10px;
}

&.success {
    background: linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000);
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
`;

export const Beatsplayer = () => {
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
                    return <Button key={index} onClick={() => handleClick(beat.src)}>{beat.title}</Button>
                })
            }
        </div>
    )
};