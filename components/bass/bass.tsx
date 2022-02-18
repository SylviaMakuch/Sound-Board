import React from "react";
import styled from "styled-components";
import { Bassplayer } from "./bassplayer";

const Container = styled.div`
    display: flex;
    width: 350px;
    margin-top: 20px;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    font-family: Yeseva One, sans-serif;
    font-size: 30px;
    color: limegreen;
`;

export default function BassContainer() {
    return (
        <Container>
            <Bassplayer />
            <Title>Bass</Title>
        </Container>)
};