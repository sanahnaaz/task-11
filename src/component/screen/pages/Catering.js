import React from 'react'
import Header from '../../include/Header';
import styled from 'styled-components';

function Catering() {
  return (
    <>
    <Container>
        <Header />
        <h2>Catering not available</h2>
    </Container>  
  </>
)
}

export default Catering;
const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
`;