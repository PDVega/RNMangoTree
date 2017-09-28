import React from 'react';
import { StackNavigator } from 'react-navigation'
import Store from './src/store'
import { Provider } from 'react-redux'

import Home from './src/screens/Home'
import Grow from './src/screens/Grow'


const AppNavigate = StackNavigator({
  Home: { screen: Home},
  Grow: { screen: Grow}
})

export default () => {
  return (
    <Provider store={Store}>
      <AppNavigate />
    </Provider>
  );
}
