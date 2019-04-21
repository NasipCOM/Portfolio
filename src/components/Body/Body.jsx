import React, { Component } from "react";
import styled from "styled-components";
import "../js";

class Body extends Component {
    render() {
        return (
            <Wrapper>
                <Card className="card">
                    <Transformer>
                        <h1>Just hover around</h1>
                        <p>Ariona, Rian</p>
                        <a>Staged dropdown animation</a>
                    </Transformer>
                </Card>
            </Wrapper>
        );
    }
}

export default Body;

const Wrapper = styled.div`
    background-color: #502030;
    height: 90vh;
`;
const Card = styled.div`
    pointer-events: none;
    transform: translateZ(0);
    padding: 30px;
    background: white;
    border-radius: 5px;
    width: 400px;
    height: 200px;
    margin: auto;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    display: flex;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    position: relative;

    &:after {
        content: " ";
        position: absolute;
        width: 100%;
        height: 10px;
        border-radius: 50%;
        left: 0;
        bottom: -50px;
        box-shadow: 0 30px 20px rgba(0, 0, 0, 0.3);
    }
`;

const Transformer = styled.div`
    margin: auto;
    text-align: center;
    transform-style: preserve-3d;

    h1 {
        transform: translateZ(100px);
    }
    p {
        transform: translateZ(50px);
        display: block;

        &.related {
            transform: translateZ(80px);
            font-style: italic;
        }
    }
    a {
        color: #69c6b8;
        pointer-events: auto;
    }
`;

/*  transform: rotateY(10deg) rotateX(3.53333deg) translateZ(-150px);
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1); */
