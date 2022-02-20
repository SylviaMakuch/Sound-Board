import React from "react";
import styled from "styled-components";
import BassPlayer from "./bass/bassplayer";
import Beatsplayer from "./beats/beatsplayer";
import BeatsPlayer from "./beats/beatsplayer";
import MelodyPlayer from "./melody/melodyplayer";

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    background: linear-gradient(45deg, #837373, #78716a, #ffd0d0, #78716a, #000000 );
    width: 1100px;
    padding: 30px;
    margin: 40px;
    box-shadow: 12px 12px 12px 12px rgba(0, 0, 255, .2);
    flex-wrap: wrap;    
    @media(max-width: 1120px) {
        justify-content: center;
        width: 500px;
        flex-direction: row;
        height: 1500px;
    }
`;

const Title = styled.div`
   font-family: 'Rock Salt', cursive;
   color: magenta;
   font-size: 35px; 
   transform: rotate(15deg);
    position: relative;
    right: 800px;
    @media(max-width: 1210px) {
        font-size: 25px; 
    }
    @media(max-width: 1120px) {
        top: 25px;
        left: 250px;
        font-size: 35px;
        transform: rotate(-35deg);
    }
    @media(max-width: 600px) {
        top: 25px;  
        left: 20px;
        font-size: 35px;
        transform: rotate(-35deg);
    }
`;

export default function MusicBox() {
    return (
        <Container>
            <MelodyPlayer />
            <BassPlayer />
            <Beatsplayer />
            <Title>Sylvia's Sound</Title>
        </Container>
    )
};