import React, { Component } from "react";
import styled from "styled-components";
import Container from "../elements/Container";
import Font from "../../config/font";
class Header extends Component {
    render() {
        return (
            <>
                <Container>
                    <Flex>
                        <HeadName>Nasip Salmakhunov</HeadName>
                        <Padding>
                            <Navbar>Work</Navbar>
                            <Navbar>About</Navbar>
                            <Navbar>Contact</Navbar>
                        </Padding>
                    </Flex>
                </Container>
            </>
        );
    }
}

export default Header;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: "Cabin", sans-serif;
    font-weight: 700;
`;
const HeadName = styled.div`
    transition: all 0.7s cubic-bezier(0.23, 1, 0.32, 1) 0s;
    font-size: 18px;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    font-family: ${Font.font};
    color: #fff;
    line-height: 1.6;
    backface-visibility: hidden;
    padding-top: 20px;
`;
const Navbar = styled.div`
    color: #fff;
    margin-left: 30px;
    font-size: 16px;
    cursor: pointer;
`;
const Padding = styled.div`
    padding-top: 20px;
    display: flex;
`;
