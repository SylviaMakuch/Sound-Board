import React from "react";
import styled from "styled-components";
import { Melodyplayer } from "./melodyplayer";

const Container = styled.div`
`;

const Title = styled.div`
    font-family: Yeseva One, sans-serif;
    font-size: 30px;
    color: limegreen;
`;

export default function MelodyContainer() {
    return (
        <Container>
            <Title>Melody</Title>
            <Melodyplayer />
        </Container>
    )
};