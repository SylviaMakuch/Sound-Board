import React from "react";
import styled from "styled-components";
import BassContainer from "./bass/bass";
import MelodyContainer from "./melody/melody";
import BeatsContainer from "./beats/beats";

const Container = styled.div`
    display:flex;
`;

export default function MusicBox() {
    return (
        <Container>
            <MelodyContainer />
            <BeatsContainer />
            <BassContainer />
        </Container>
    )
};