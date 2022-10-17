import React from 'react'
import styled from 'styled-components'
import Header from '../../include/Header';


function Account() {
  return (
    <>
        <Container>
            <Header />
            <Icondiv>
              <IconImage src={require("../../../assets/images/rectangle.jpg")} />
            </Icondiv>
            <H4>Aisyah Namanya</H4>
        </Container>
    </>
  )
}

export default Account

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;
const Icondiv = styled.div`
    width: 10%;
`;
const IconImage = styled.img`
    display: block;
    width: 100%;
    border-radius: 50%;
`;
const H4 = styled.h4`
    font-weight: bold;
    font-size: 13px;
    margin-left: 6px;
`;
