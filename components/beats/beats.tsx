import React from "react";
import styled from "styled-components";
import { Beatsplayer } from "./beatsplayer";

const Container = styled.div`
    display: flex;
    height: 250px;
`;

export default function BeatsContainer() {
    return (
        <Container>
            <Beatsplayer />
        </Container>
    )
};