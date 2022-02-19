import React from "react";
import styled from "styled-components";
import { Beatsplayer } from "./beatsplayer";

const Container = styled.div`
    margin-top: 20px;
    border-radius: 2px solid red;   
`;

const Title = styled.div`
    font-family: 'Yeseva One', cursive;
    font-size: 30px;
    color: ff7300;
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