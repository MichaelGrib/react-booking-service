import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import logo from './logo.svg';

const LogoImg = styled.div`
    padding: 20px;
    display: inline-block;
    border-right: 1px solid #fff;
`

export default class Logo extends React.Component {
    render() {
        return (
            <LogoImg>
                <img src={logo} alt="logo"/>
            </LogoImg>
        )
    }
}