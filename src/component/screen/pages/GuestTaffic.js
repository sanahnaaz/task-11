import React from 'react'
import Header from '../../include/Header'
import Grapht from '../Grapht'
import styled from 'styled-components'

function GuestTaffic() {
  return (
    <>
      <Container>
          <Header />
          <Grapht />
      </Container>  
    </>
  )
}

export default GuestTaffic;
const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
`;
