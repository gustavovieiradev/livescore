import React from 'react';

import { Feather } from '@expo/vector-icons';

import { Container, TextInput } from './styles';

interface IProps {
   
}

export default function Input() {
  return (
    <Container>
      <Feather name="mail" color="#65656B" size={20} />
      <TextInput placeholder="Email" />
    </Container>
  );
}