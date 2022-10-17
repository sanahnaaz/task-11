import React from 'react'
import Header from '../include/Header'
import Spotlight from './Spotlight'
import styled from 'styled-components'
import {Helmet} from "react-helmet";



function Main() {
  return (
    <>
      <Helmet>
        <title>Vorgez</title>
      </Helmet>
      <Container>
          <Header />
          <Spotlight />
      </Container>  
    </>
  )
}   
export default Main
const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
`;
