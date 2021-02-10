import React from 'react';

import Input from '../../components/Input';

import { 
  BackgroundOpacity, 
  Container, 
  Content, 
  Image, 
  Title, 
  Form, 
  SectionAux, 
  SectionCheckbox, 
  Checkbox, 
  TextCheckbox, 
  ButtonForgotPassword, 
  TextButtonForgotPassword,
  ButtonEnter,
  TextButtonEnter,
  SigninAux,
  SigninAuxText,
  ButtonSignup,
  TextButtonSignupText
} from './style';

import high from '../../images/highmbape.png';

export default function Login() {
  return (
    <>
      <Container>
        <Image source={high} />
      </Container>
      <BackgroundOpacity />
      <Content>
        <Title>Welcome</Title>
        <Form>
          <Input />
          <Input />
        </Form>
        <SectionAux>
          <SectionCheckbox>
            <Checkbox />
            <TextCheckbox>Remember me</TextCheckbox>
          </SectionCheckbox>
          <ButtonForgotPassword>
            <TextButtonForgotPassword>Forgot Password</TextButtonForgotPassword>
          </ButtonForgotPassword>
        </SectionAux>

        <ButtonEnter>
          <TextButtonEnter>Sign in</TextButtonEnter>
        </ButtonEnter>

        <SigninAux>
          <SigninAuxText>Don’t have account?</SigninAuxText>
          <ButtonSignup>
            <TextButtonSignupText>Sign UP</TextButtonSignupText>
          </ButtonSignup>
        </SigninAux>

      </Content>
    </>
  );
}