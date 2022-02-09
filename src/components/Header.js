import React from 'react';
import styled from 'styled-components';
import { BsThreeDotsVertical } from 'react-icons/bs';

import logo from '../assets/logo.png';
import logoMobile from '../assets/logo_mobile.png';

export default function Header() {
    return (
        <Head>
            <Logo>
                <img src={logo} alt="logo" />
                <div>
                    <h1>zutterman</h1>
                    <h2>Measure Tapes</h2>
                </div>
            </Logo>
            <Menu>
                <h3>ABOUT US</h3>
                <h3>MODELS</h3>
                <h3>GUARANTEE</h3>
            </Menu>
            <Icon />
            <LogoMobile src={logoMobile} alt="logo mobile" />
        </Head>
    );
}

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    height: 110px;
    width: 100%;
    padding: 0 60px;
    background: #FFF;
    z-index: 2;

    @media (max-width: 375px) {
        height: 57px;
        padding: 0 22px;
    }
`;

const Logo = styled.div`
    display: flex;
    cursor: pointer;
    
    h1{
        font-size: 41.2px;
        line-height: 48px;
        color: #846219;
        font-weight: 700;
    }

    h2{
        font-size: 16.2px;
        line-height: 19px;
        letter-spacing: 5.4px;
        color: #846219;
        font-weight: 300;
    }

    div{
        margin-left: 24px;
        text-align: center;
    }


    @media (max-width: 375px){
        display: none;
    }
`;

const Menu = styled.div`
    display: flex;

    h3{
        font-size: 16.2px;
        line-height: 19px;
        letter-spacing: 5.4px;
        color: #846219;
        margin-left: 128px;
        font-weight: 300;
        cursor: pointer;
    }

    @media (max-width: 375px){
        display: none;
    }
`;

const Icon = styled(BsThreeDotsVertical)`
    display: none;
    color: #E2E0B8; 
    font-size: 35px;

    @media (max-width: 375px){
        display: flex;
        width: 40px;
    }
`;

const LogoMobile = styled.img`
    display: none;
    width: 40px;
    margin-right: calc(50% - 20px);

    @media (max-width: 375px){
        display: flex;
    }
`;