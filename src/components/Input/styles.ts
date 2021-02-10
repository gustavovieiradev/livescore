import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background-color: #181829;
  border-radius: 16px;
  height: 66px; 
  margin-bottom: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 24px 18px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: '#65656B'
})`
  width: 90%;
  color: #65656B;
  font-size: 14px;
  font-family: 'Montserrat_400Regular';
  margin-left: 8px;
`;