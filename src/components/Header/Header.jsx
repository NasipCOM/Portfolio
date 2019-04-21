import React, { Component } from "react";
import styled from "styled-components";

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <HeadName>Nasip Salmakhunov</HeadName>
      </Wrapper>
    );
  }
}

export default Header;

const Wrapper = styled.div`
  background-color: #502030;
`;
const HeadName = styled.a`
  text-decoration: none;
  cursor: auto !important;
  font-family: "Cabin", sans-serif;
  font-weight: 700;
  color: #fff;
  line-height: 1.6;
`;
