import React, { useState } from 'react';
import { Text, View, StatusBar, Button } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import styled from 'styled-components';

import { connect, Provider } from 'react-redux'
import { createStore } from 'redux'
import countReducer from './reducers/count'

const store = createStore(countReducer)

type AppState = {
  count: number
}

class App extends React.Component<{}, AppState> {

  public render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}

const Container = styled(View)`
  align-items: center;
  background-color: pink;
  display: flex;
  justify-content: center;
  height: 100%;
  width: 100%;
`

const CountScreen = () => {

  const [count, setCount] = useState(0)

  return(
  <Container>
    <StatusBar hidden={true}/>
    <Text>You clicked {count} times. How fun.</Text>
    <Button
      title="Wheeee"
      onPress={() => setCount(count + 1)}
    />
  </Container>
  )
}

const HomeScreen = (props) => {
  return (
  <Container>
    <StatusBar hidden={true}/>
    <Text>Welcome home</Text>
    <Button
      title="What time is it?"
      onPress={() => props.navigation.navigate("Time")}
    />
    <Button
      title="Press butan"
      onPress={() => props.navigation.navigate("Count")}
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

const RootStack = createStackNavigator(
  {
    Count: {
      screen: CountScreen
    },
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

const Navigation = createAppContainer(RootStack)

export default App
