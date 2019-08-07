import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import styled from 'styled-components';

const Container = styled(View)`
  align-items: center;
  background-color: pink;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`

export default function App() {
  return (
    <Container>
      <StatusBar hidden={true} />
      <Text>Open up App.tsx to start working on your app!</Text>
    </Container>
  );
}
