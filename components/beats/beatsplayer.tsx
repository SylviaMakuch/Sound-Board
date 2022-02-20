import React from "react";
import styled from "styled-components";
import { Howl } from 'howler';
import { beatsData } from "./beatsconfig";
import { useState } from "react";

const Container = styled.div`
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);  
  margin: 10px;
  @media(max-width: 1120px) {
    grid-template-columns: repeat(4, 1fr);  
    }
`;

const Title = styled.div`
    font-family: 'Yeseva One', cursive;
    font-size: 30px;
    color: #ff36f8; 
    text-align: center; 
`;
const Button = styled.button<{ $isActive?: boolean }>`
    height: 80px;
    width: 80px;
    margin: 0px 5px; 
    background: ${props => props.$isActive ? "linear-gradient(55deg, #ff00e1, #ffb9df,#ffb9df, #ff00cc);" : "black"};
    color: #ff36f8; 
    font-family: 'Roboto Serif', sans-serif;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
   
&:before {
    content: '';
    background: linear-gradient(35deg, #ff00e1, #ffb9df,#ffb9df, #ff00cc);
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
    background: linear-gradient(45deg, #ff00e1, #ffb9df,#ffb9df, #ff00cc);
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
    @media(max-width: 1200px){
        height: 1700px;
    }
}`;

export default function Beatsplayer() {
    const [activeSound, setActiveSound] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isActive, setIsActive] = useState(false); 

    const createSound = (beat: string) => {
        return new Howl({
            src: beat,
            autoplay: false,
            loop: false,
            volume: 0.5
        });
    }

    const handleClick = (beat: string, index: number ) => {

        if (activeIndex === isActive){
            setIsActive(!isActive);
        }


        if (activeSound) {
            activeSound.stop(); 
        } 

        if (activeIndex !== index) {
            const newSound = createSound(beat);
            newSound.play();
            setActiveSound(newSound);
        }
        setActiveIndex(index);
    };
    return (
        <Container>
            <Title> Beats </Title>
            <Grid>
                {
                    beatsData.map((beat, index: number) => {
                        return <Button key={index} $isActive={activeIndex === index} onClick={() => handleClick(beat.src, index)}>{beat.title}</Button>
                    })
                }
            </Grid>
        </Container>
    )
};