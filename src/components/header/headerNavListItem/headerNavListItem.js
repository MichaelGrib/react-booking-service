import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Link = styled.a`
    text-decoration: none;
    color: #fff;
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    margin: 0 14px;
`

export default class HeaderNavListItem extends React.Component {
    render() {
        const {linkName, link} = this.props
        return (
            <Link href={link}>{linkName}</Link>
        )
    }
}