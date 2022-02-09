import React from 'react';
import styled from 'styled-components';
import { BsYoutube, BsTwitter } from 'react-icons/bs';
import { RiFacebookFill } from 'react-icons/ri';

export default function Footer() {
    return (
        <Body>
            <Social>
                <Title>Follow Us</Title>
                <div>
                    <Circle>
                        <BsYoutube color="#716565" size="20px" />
                    </Circle>
                    <Circle>
                        <RiFacebookFill color="#716565" size="25px" />
                    </Circle>
                    <Circle>
                        <BsTwitter color="#716565" size="20px" />
                    </Circle>
                </div>
            </Social>
            <Contact>
                <Title>Contact</Title>
                <div>
                    <p>2490 Leisure Lane San Luis Obispo California</p>
                </div>
            </Contact>
        </Body>
    );
}

const Body = styled.div`
    height: 226px;
    background: #E9E9E9;
    display: flex;
    justify-content: space-between;
    padding: 47px 151px;

    @media (max-width: 375px){
        height: 334px;
        padding: 0;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        position: relative;
        margin-top: 620px;
    }
`;

const Social = styled.div`
    display: flex;
    flex-direction: column;

    div{
        display: flex;
    }
`;

const Title = styled.h1`
    font-size: 27.2px;
    line-height: 32px;
    color: #716565;
    margin-bottom: 15px;
    font-weight: 700;

    @media (max-width: 375px){
        text-align: center;
    }
`;

const Circle = styled.div`
    width: 38px;
    height: 38px;
    border: 1px solid #716565;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 26px;
    cursor: pointer;

    @media (max-width: 375px){
        margin: 0 13px;
    }
`;

const Contact = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: calc(50% - 20px);

    div{
        width: 121px;
    }

    p{
        font-size: 16.2px;
        line-height: 19px;
        color: #716565;
    }

    @media (max-width: 375px){
        margin: 0;
    }
`;