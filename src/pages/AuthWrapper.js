import React from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import styled from 'styled-components'
import { Navigate } from 'react-router-dom'

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0()
  if (isLoading) {
    return <Wrapper>登入中...</Wrapper>
  }
  if (error) {
    console.log(error)
    return <Navigate to="/" />
  }
  return children
}

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
`

export default AuthWrapper
