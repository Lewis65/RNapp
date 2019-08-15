import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import countReducer from './reducers/count'

import CountScreen from './screens/CountScreen'
import HomeScreen from './screens/HomeScreen'
import TimeScreen from './screens/TimeScreen'

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
