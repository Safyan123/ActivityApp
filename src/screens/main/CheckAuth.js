import React, { Component } from 'react'
import { View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';

import {
  USER_LOGIN_OBJ
} from '../../constants'

export default class CheckAuth extends Component {
  navigateToScreen = (route) => {
    const { navigation } = this.props
    navigation.navigate(route)
  }

  async componentDidMount() {
    const isLoggedin = await AsyncStorage.getItem(USER_LOGIN_OBJ)
    const {
      navigateToScreen,
    } = this

    if (isLoggedin)
      navigateToScreen('LoggedInNavigator')
    else
      navigateToScreen('LoggedOutNavigator')
  }

  render() {
    return (
      <View />
    );
  }
}