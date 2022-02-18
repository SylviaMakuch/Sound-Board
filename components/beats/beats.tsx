import React from "react";
import styled from "styled-components";
import { Beatsplayer } from "./beatsplayer";

const Container = styled.div`
    display: flex;
    height: 250px; 
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    font-family: Yeseva One, sans-serif;
    font-size: 30px;
    color: limegreen;
`;

export default function BeatsContainer() {
    return (
        <Container>
            <Beatsplayer />
            <Title>
                Beats
            </Title>
        </Container>
    )
};