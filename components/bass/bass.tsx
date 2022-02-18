import React from "react";
import styled from "styled-components";
import { Bassplayer } from "./bassplayer";

const Container = styled.div`
    display: flex;
    width: 250px;
`;

export default function BassContainer() {
    return (
        <Container>
            <Bassplayer />
        </Container>)
};