import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import Logo from './logo';
import HeaderNavList from './headerNavList';
import HeaderSelectLang from './headerSelectLang';
import UserProfile from './userProfile';

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #19274D;
    
`

export default class Header extends React.Component {
    render() {
        return (
            <HeaderDiv>
                <Logo/>
                <HeaderNavList/>
                <HeaderSelectLang/>
                <UserProfile/>
            </HeaderDiv>
        )
    }
}