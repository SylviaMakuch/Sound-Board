import React from "react";
import styled from "styled-components";
import BassContainer from "./bass/bass";
import MelodyContainer from "./melody/melody";
import BeatsContainer from "./beats/beats";

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    background-color: pink;
    width: 1100px;
    padding: 30px;
    margin: 40px;
    box-shadow: 12px 12px 12px 12px rgba(0, 0, 255, .2);
`;

const Title = styled.div`
   font-family: 'Rock Salt', cursive;
   color: magenta;
   font-size: 35px; 
   transform: rotate(-15deg);
   position: relative;
    top: 200px;
`;

export default function MusicBox() {
    return (
        <Container>
            <MelodyContainer />
            <BassContainer />
            <BeatsContainer />
            <Title>Sylvia's Sound</Title>
        </Container>
    )
};