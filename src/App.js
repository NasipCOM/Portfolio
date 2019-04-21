import React, { Component } from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import styled from "styled-components";

class App extends Component {
    render() {
        return (
            <Wallpaper>
                <Header />
                <Body />
            </Wallpaper>
        );
    }
}

export default App;

const Wallpaper = styled.div`
    background-color: #502030;
`;
