import React, { Component } from "react";
import styled from "styled-components";
import Container from "../elements/Container";
class Header extends Component {
    render() {
        return (
            <Wrapper>
                <Container>
                    <HeadName href="a">Nasip Salmakhunov</HeadName>
                </Container>
            </Wrapper>
        );
    }
}

export default Header;

const Wrapper = styled.div`
    background-color: #502030;
`;
const HeadName = styled.a`
    display: blok;
    margin-top: 3em;
    font-size: 18px;
    text-transform: uppercase;
    text-decoration: none;
    font-family: "Cabin", sans-serif;
    font-weight: 700;
    color: #fff;
    line-height: 1.6;
    backface-visibility: hidden;
`;
