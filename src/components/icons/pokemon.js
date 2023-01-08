import styled from "styled-components";

export const Pokemon = styled.div`
    width: 50px;
    height: 50px;
    border: 3px;
    border-radius: 50%;
    position: relative;
    background: black;

    &:before{
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 3px solid white;
        top: 16px;
        left: 16px;
    }

    &:after{
        content: '';
        position: absolute;
        width: 16px;
        height: 3px;
        background: white;
        top: 23.5px;
        box-shadow: 34px 0 0 white;
    }
`