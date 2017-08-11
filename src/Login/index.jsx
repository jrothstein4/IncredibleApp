import React, { Component } from 'react'
import styled from 'styled-components'

class Login extends Component {

  onLogin = () => {

  }

  render () {

    return (
      <Container>
        <LoginForm>
          <TitleContainer>
            <Title>Login</Title>
          </TitleContainer>
          <LoginInput placeholder='Email Address' type='email' required />
          <LoginInput placeholder='Password' type='password' required />
          <LoginButton onClick={this.onLogin}>Login</LoginButton>
        </LoginForm>
      </Container>
    )
  }
}

const Container = styled.div`
  height: 100vh;
  background-color: lightgrey;
`

const LoginForm = styled.div`
  max-width: 550px;
  margin: auto;
  margin-top: 0px;
  background-color: white;
  padding: 35px 45px;
  * {
    box-sizing: border-box;
  }`

const TitleContainer = styled.div`
  margin-bottom: 15px;
`

const Title = styled.label`
  font-size: 24px;
  border: none;
`

const LoginInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: none;
  background-color: #e3e3e3;
  font-weight: bold;
  font-size: 16px;
  margin-top: 15px;
  ::-webkit-input-placeholder {
    color: grey;
    font-weight: normal;
  }`

const LoginButton = styled.button`
  font-size: 16px;
  margin-top: 20px;
  padding: 10px 15px;
  background-color: #00aaff;
  color: white;
  border: none;
  width: 200px;
  display: block;
`

export default Login
