import React from 'react'
import Header from '../../include/Header'
import Profile from '../Profile'
import styled from 'styled-components'

function GuestListPage() {
  return (
    <>
        <Container>
            <Header />
            <Profile />
        </Container>
    </>
  )
}

export default GuestListPage

const Container = styled.section`
    display: flex;
    flex-wrap: wrap;
`;