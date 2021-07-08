import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import Logo from './logo';

const HeaderDiv = styled.div`
    background-color: #19274D;
`

export default class Header extends React.Component {
    render() {
        return (
            <HeaderDiv>
                <Logo/>
            </HeaderDiv>
        )
    }
}