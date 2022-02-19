import React from "react";
import styled from "styled-components";
import { Melodyplayer } from "./melodyplayer";

const Container = styled.div`
    display: flex;
    width: 250px;
    height: 600px;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    font-family: Yeseva One, sans-serif;
    font-size: 30px;
    color: limegreen;
`;

export default function MelodyContainer() {
    return (
        <Container>
            <Melodyplayer />
            <Title>Melody</Title>
        </Container>
    )
};