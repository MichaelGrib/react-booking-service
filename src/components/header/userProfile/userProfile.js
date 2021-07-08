import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';
import icon from './userIcon.svg'

const Profile = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 38px;
    margin-right: 57px;
    &:hover{
        cursor: pointer;
    }
`

const Name = styled.span`
    color: #fff;
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    margin-right: 10px;
`

const Icon = styled.img`

`


export default class UserProfile extends React.Component {
    render() {
        return (
            <Profile>
                <Name>User</Name>
                <Icon src={icon} alt="User icon"/>
            </Profile>
        )
    }
}