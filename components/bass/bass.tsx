import React from "react";
import styled from "styled-components";
import { Bassplayer } from "./bassplayer";

const Container = styled.div`
    margin: 20px;
`;

const Title = styled.div`
    font-family: Yeseva One, sans-serif;
    font-size: 30px;
    color: ff00e1;
`;

export default function BassContainer() {
    return (
        <Container>
            <Title>Bass</Title>
            <Bassplayer />
        </Container>)
};