import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import configureStore from './redux/configureStore'

import CountScreen from './screens/CountScreen'
import HomeScreen from './screens/HomeScreen'
import TimeScreen from './screens/TimeScreen'

const { store, persistor } = configureStore()

type AppState = {
  count: number
}

class App extends React.Component<{}, AppState> {

  public render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigation />
        </PersistGate>
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
