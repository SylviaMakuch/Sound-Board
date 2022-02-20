import React from "react";
import styled from "styled-components";
import BassPlayer from "./bass/bassplayer";
import Beatsplayer from "./beats/beatsplayer";
import BeatsPlayer from "./beats/beatsplayer";
import MelodyPlayer from "./melody/melodyplayer";
import music from "./../sounds/music.svg";


const Page = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
`
const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    background: linear-gradient(45deg, #837373, #78716a, #ffd0d0, #78716a, #000000 );
    width: 1100px;
    padding: 30px;
        margin: 40px;
    box-shadow: 12px 12px 12px 12px #0000ff3b;
    flex-wrap: wrap;    
    @media(max-width: 1120px) {
        justify-content: center;
        width: 500px;
        flex-direction: row;
        height: 1500px;
    }
`;

const Img = styled.img`
    width: 100px;
    margin: 30px;
`


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
        left: 20px;
        font-size: 35px;
        transform: rotate(-5deg);
    }
`;

export default function MusicBox() {
    return (
        <Page>
            <Container>
                <MelodyPlayer />
                <BassPlayer />
                <Beatsplayer />
                <Img src={music} />
                <Title>Sylvia's Sound</Title>
            </Container>
        </Page>
    )
};