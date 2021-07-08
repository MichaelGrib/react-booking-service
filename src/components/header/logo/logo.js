import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';

export default class Logo extends React.Component {
    render() {
        return <img src={logo} alt="logo"/>
    }
}