import React from "react";
import styled from "styled-components";
import BassContainer from "./bass/bass";
import MelodyContainer from "./melody/melody";
import BeatsContainer from "./beats/beats";

const Container = styled.div`

`;

export default function BeatsContainer() {
    return (
        <Container>
            <BeatsContainer />
            <BassContainer />
            <MelodyContainer />
        </Container>
    )
};