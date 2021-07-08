import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import HeaderNavListItem from '../headerNavListItem';

const HeaderNav = styled.nav`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 0 35px;
`

export default class HeaderNavList extends React.Component {
    render() {
        return (
            <HeaderNav>
                <HeaderNavListItem link="#" linkName="Главная"></HeaderNavListItem>
                <HeaderNavListItem link="#" linkName="Цены"></HeaderNavListItem>
                <HeaderNavListItem link="#" linkName="О нас"></HeaderNavListItem>
            </HeaderNav>
        )
    }
}