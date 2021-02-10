import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #181829;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 64px 48px 50px 48px;
`;

export const Image = styled.Image`
  width: 291px;
  height: 339px;
`;

export const Content = styled.View``;

export const Title = styled.Text`
  font-family: 'Montserrat_500Medium';
  font-size: 40px;
  line-height: 50px;
  color: #FFFFFF;
`;

export const Description = styled.Text`
  font-family: 'Montserrat_400Regular';
  font-size: 16px;
  line-height: 21px;
  color: #65656B;
  margin-top: 15px;
`;

export const ContentAction = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Signin = styled.TouchableOpacity`
  background: #246BFD;
  height: 63px;
  width: 200px;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 36px; 
`;

export const Signup = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
`;

export const SigninText = styled.Text`
  font-family: 'Montserrat_500Medium';
  color: #fff;
  font-size: 18px;
`;

export const SignupText = styled.Text`
  color: #C4C4C4;
  font-family: 'Montserrat_400Regular';
  font-size: 18px;
`;  