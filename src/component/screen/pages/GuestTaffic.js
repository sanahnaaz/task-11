import React from 'react'
import Header from '../../include/Header'
import Grapht from '../Grapht'
import styled from 'styled-components'

function GuestTaffic() {
  return (
    <>
      
          <Header />
          <PageGraph>
          <Grapht />
           </PageGraph>
    </>
  )
}

export default GuestTaffic

const PageGraph = styled.section`
`;