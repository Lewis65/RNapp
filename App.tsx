import React from 'react';
import { Text, View, StatusBar, Button } from 'react-native';
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

const HomeScreen = (props) => {
  return (
  <Container>
    <StatusBar hidden={true}/>
    <Text>Welcome home</Text>
    <Button
      title="What time is it?"
      onPress={() => props.navigation.navigate("Time")}
    />
  </Container>
  )
}

const TimeScreen = (props) => {
  return(
  <Container>
    <StatusBar hidden={true}/>
    <Text>The time is {Date.now()}</Text>
    <Button
      title="Ok great thanks"
      onPress={() => props.navigation.navigate("Home")}
    />
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
