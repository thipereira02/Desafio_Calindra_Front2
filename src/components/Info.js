import React from 'react';
import styled from 'styled-components';

import measure from '../assets/Bitmap Copy (1).png';

export default function Info() {
    return (
        <Body>
            <img src={measure} alt="measure" />
            <Text>
                <h1>We are Leader in Measure Tapes</h1>
                <h2>There are 5x the circumference of planet earth in metric tapes.</h2>
            </Text>
        </Body>
    );
}

const Body = styled.div`
    background: #506FA9;
    position: relative;
    display: inline-block;
    width: 100%;
    
    img{
        mix-blend-mode: multiply;
        width: 900px;
        margin-top: 80px;
        margin-left: calc(100% - 900px);

        @media (max-width: 375px){
            width: 250px;
            margin-top: 350px;
            margin-left: calc(100% - 250px);
        }
    }

    @media(max-width: 375px){
        position: absolute;
        display: inline;
    }
`;

const Text = styled.div`
    position: relative;
    bottom: 280px;
    left: 160px;
    width: 484px;

    h1{
        color: #FFF;
        font-size: 69.2px;
        line-height: 81px;
        font-weight: 700;
    }

    h2{
        margin-top: 26px;
        color: #FFF;
        font-size: 48.2px;
        line-height: 56px;
        font-weight: 300;
    }

    @media (max-width: 375px){
        position: inline;
        width: 288px;
        bottom: 400px;
        left: 0;
        margin: 0 auto;

        h1{
            font-size: 41.2px;
            line-height: 48px;
        }

        h2{
            margin-top: 22px;
            font-size: 26.2px;
            line-height: 31px;
        }
    }
`;