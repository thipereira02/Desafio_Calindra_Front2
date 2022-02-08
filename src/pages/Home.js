import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';

export default function Home() {
    return (
        <>
            <Header />
            <Body>

            </Body>
        </>
    );
}

const Body = styled.div`
    margin-top: 100px;
`;