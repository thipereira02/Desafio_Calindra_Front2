import React from 'react';
import styled from 'styled-components';

import measuringTape from '../assets/Bitmap Copy.png';

export default function Cover() {
    return (
        <Body>
            <h1>Measuring everything</h1>
            <img src={measuringTape} alt="Measuring tape" />
        </Body>
    );
}

const Body = styled.div`
    margin-top: 110px;
    height: 90vh;
    background: #E9E9E9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 120px;

    h1{
        font-size: 82.2px;
        line-height: 96px;
        color: #716565;
        font-weight: 700;
        margin-left: 25px;
    }

    @media (max-width: 375px){
        margin-top: 57px;
        height: 80vh;
        flex-direction: column;
        width: 100%;
        padding: 0 22px;

        h1{
            margin-left: 0;
            margin-bottom: 28px;
            font-size: 53.2px;
            line-height: 62px;
            text-align: center;
        }

        img{
            width: 370px;
        }
    }
`;