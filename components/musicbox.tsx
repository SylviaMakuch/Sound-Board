import React from "react";
import styled from "styled-components";
import BassPlayer from "./bass/bassplayer";
import Beatsplayer from "./beats/beatsplayer";
import BeatsPlayer from "./beats/beatsplayer";
import MelodyPlayer from "./melody/melodyplayer";

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    background-color: pink;
    width: 1100px;
    padding: 30px;
    margin: 40px;
    box-shadow: 12px 12px 12px 12px rgba(0, 0, 255, .2);
    /* @media(max-height: 800px) {
        width: 500px;
        flex-direction: row;
        height: 1500px;
    } */
`;

const Title = styled.div`
   font-family: 'Rock Salt', cursive;
   color: magenta;
   font-size: 35px; 
   transform: rotate(-15deg);
   position: relative;
    top: 300px;
    left: 50px;
    /* @media(min-height: 800px) {
        top: 1300px;
        left:60px;
    } */
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