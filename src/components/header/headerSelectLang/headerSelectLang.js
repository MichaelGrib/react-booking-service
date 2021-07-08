import React from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    margin-left: auto;
    width: 50px;
`

const Arrow = styled.div`
    position: absolute;
    top: 50%;
    right: 10px;
    width: 10px;
    height: 10px;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
    pointer-events: none;
    transform: rotate(45deg) translateY(-100%);
`

const Select = styled.select`
    appearance: none;
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    font-family: 'Nunito', sans-serif;
    font-size: 18px;
    width: 100%;
`

export default class HeaderSelectLang extends React.Component {
    render() {
        return (
            <Wrapper>
                <Select>
                    <option>RU</option>
                    <option>EN</option>
                </Select>
                <Arrow/>
            </Wrapper>
        )
    }
}