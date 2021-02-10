import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #181829;
  display: flex;
  position: relative;
  padding: 64px 48px 50px 48px;
  align-items: center;
`;

export const Image = styled.Image`
  width: 291px;
  height: 339px;
`;

export const BackgroundOpacity = styled.View`
  position: absolute;
  background-color: #000;
  opacity: 0.8;
  top: 0;
  height: 100%;
  width: 100%;
`;

export const Content = styled.View`
  position: absolute;
  bottom: 0;
  height: 63%;
  width: 100%;
  background-color: #222232;
  border-radius: 42px;
  padding: 40px 24px;
`;

export const Title = styled.Text`
  font-family: 'Montserrat_600SemiBold';
  font-size: 28px;
  color: #fff;
`;

export const Form = styled.View`
  margin-top: 35px;
`;

export const SectionAux = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center; 
`;

export const SectionCheckbox = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Checkbox = styled.View`
  width: 16px;
  height: 16px;
  border: 1px solid #65656B;
  border-radius: 5px;
  background-color: #222232;
  margin-right: 10px;
`;

export const TextCheckbox = styled.Text`
  font-family: 'Montserrat_400Regular';
  color: #65656B;
  font-size: 14px;
  line-height: 18px;
`;

export const ButtonForgotPassword = styled.TouchableOpacity``;

export const TextButtonForgotPassword = styled.Text`
  font-family: 'Montserrat_400Regular';
  font-size: 12px;
  line-height: 16px;
  color: #FFFFFF; 
`;

export const ButtonEnter = styled.TouchableOpacity`
  background: #246BFD;
  border-radius: 16px;
  height: 63px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`;

export const TextButtonEnter = styled.Text`
  color: #fff;
  font-size: 18px;
  font-family: 'Montserrat_600SemiBold';
`;

export const SigninAux = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: 24px;
`;

export const SigninAuxText = styled.Text`
  color: #C4C4C4;
  font-size: 14px;  
  font-family: 'Montserrat_400Regular';
`;

export const ButtonSignup = styled.TouchableOpacity`
`;

export const TextButtonSignupText = styled.Text`
  color: #246BFD;
  font-size: 14px;  
  font-family: 'Montserrat_400Regular';
`;