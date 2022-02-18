import React from "react";
import styled from "styled-components";
import { Melodyplayer } from "./melodyplayer";

const Container = styled.div`
    display: flex;
    width: 250px;
`;

export default function MelodyContainer() {
    return (
        <Container>
            <Melodyplayer />
        </Container>
    )
};