import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import styled from 'styled-components';

const Container = styled(View)`
  align-items: center;
  background-color: pink;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const HomeScreen = () => {
  return (
  <Container>
    <StatusBar hidden={true}/>
    <Text>Welcome home</Text>
  </Container>
  )
}

const TimeScreen = () => {
  return(
  <Container>
    <StatusBar hidden={true}/>
    <Text>The time is {Date.now()}</Text>
  </Container>
  )
}

const Navigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    Time: {
      screen: TimeScreen
    }
  },
  {
    initialRouteName: "Home"
  }
)

export default createAppContainer(Navigator)
