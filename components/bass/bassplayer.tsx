import React from "react";
import styled from "styled-components";
import { Howl } from 'howler';
import { useState } from "react";
import { bassData } from "./bassconfig";

const Container = styled.div`
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  margin-top: 20px; 
  /* @media(max-height: 800px) {
    grid-template-columns: repeat(2, 1fr);
    } */
`;

const Title = styled.div`
    font-family: Yeseva One, sans-serif;
    font-size: 30px;
    color: #ff00e1;
`;

const Button = styled.button`
    height: 80px;
    width: 80px;
    margin: 0px 5px;
    background: #111;
    color: #e13b91; 
    font-family: 'Yeseva One', cursive;
    border-radius: 10px;
    cursor: pointer;
    position: relative;

   
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
    color: black;
    background: linear-gradient(55deg, #ff00e1, #ffb9df,#ffb9df, #ff00cc);
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
`;

export default function BassPlayer() {
    const [activeSound, setActiveSound] = useState(null);

    const createSound = (beat: string) => {
        return new Howl({
            src: beat,
            autoplay: false,
            loop: false,
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
        <Container>
            <Title>Bass</Title>
            <Grid>
                {
                    bassData.map((beat, index: number) => {
                        return <Button key={index} onClick={() => handleClick(beat.src)}>{beat.title}</Button>
                    })
                }
            </Grid>
        </Container>

    )
};