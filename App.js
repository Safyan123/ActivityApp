/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import MainNavigator from './src/screens/main'
import { NetworkProvider } from './src/context/networkContext'
import { WebserviceProvider } from './src/context/webserviceContext';

const AppContainer = createAppContainer(MainNavigator)

export default class App extends Component {
  render() {
    return (
      <NetworkProvider>
        <WebserviceProvider>
          <AppContainer />
        </WebserviceProvider>
      </NetworkProvider>
    );
  }
}
