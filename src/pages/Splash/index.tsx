import React from 'react';

import high from '../../images/highmbape.png';
import {Container, Image, Content, Title, Description, ContentAction, Signin, Signup, SigninText, SignupText} from './styles';

export default function Splash() {
  return (
    <Container>
      <Image source={high} />
      <Content>
        <Title>Dicover all about sport</Title>
        <Description>Search millions of jobs and get the inside scoop on companies.
            Wait for what? Let’s get start it!</Description>
      </Content>
      <ContentAction>
        <Signin>
          <SigninText>Sign in</SigninText>
        </Signin>
        <Signup>
          <SignupText>Sign Up</SignupText>
        </Signup>
      </ContentAction>
    </Container>
  )
}