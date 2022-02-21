import React from "react";
import styled from "styled-components";
import { Howl } from 'howler';
import { melodyData } from "./melodyconfig";
import { useState } from "react";

const Container = styled.div`
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
  margin: 10px;
  justify-items: center;
  @media(max-width: 1120px) {
    grid-template-columns: repeat(4, 1fr);  
    }  
`;

const Title = styled.div`
    font-family: 'Yeseva One', cursive;
    font-size: 30px;
    color: #19bd19;
    text-align: center; 
`;
const Button = styled.button<{ $isActive?: boolean }>`
    height: 80px;
    width: 80px;
    margin: 0px 5px; 
    background: ${props => props.$isActive ? "linear-gradient(55deg, #48ff00, #fffb00, #00ffd5);" : "black"};
    color: #19bd19; 
    font-family: 'Roboto Serif', sans-serif;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
     
    &:before {
    content: '';
    color: black;
    background: linear-gradient(45deg, #48ff00, #fffb00, #00ffd5);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size : 400%;
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
    background: linear-gradient(55deg,  #48ff00, #fffb00, #00ffd5);
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

export default function Melodyplayer() {
    const [activeSound, setActiveSound] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [isActive, setIsActive] = useState(false); 

    const createSound = (beat: string) => {
        return new Howl({
            src: beat,
            autoplay: false,
            loop: true,
            volume: 0.5
        });
    }

    const handleClick = (beat: string, index: number ) => {

        if (activeIndex === isActive) {
            setIsActive(!isActive);
            activeSound.play();
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
    }
    return (
        <Container>
            <Title> Melody </Title>
            <Grid>
                {
                    melodyData.map((beat, index: number) => {
                        return <Button key={index} $isActive={activeIndex === index} onClick={() => handleClick(beat.src, index)}>{beat.title}</Button>
                    })
                }
            </Grid>
        </Container>
    )
};