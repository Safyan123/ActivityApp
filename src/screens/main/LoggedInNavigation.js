import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { BottomTabBar } from "react-navigation-tabs";
import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Platform,
  TouchableOpacity
} from "react-native";

import { ifIphoneX } from 'react-native-iphone-x-helper'

import DiscoverNavigator from '../discover'
import ActivityNavigator from '../activities'
import ChatNavigator from '../chat'
import ProfileNavigator from '../profile'
import CreateActivityNavigator from '../createActivity'
import ActivityDetailNavigator from '../activityDetail'

import PLUS_IC from '../../images/edit_ic.png';
import HOME_IC from "../../images/discover_ic.png";
import ACTIVITY_IC from "../../images/activities_ic.png";
import CHAT_IC from '../../images/chat_ic.png'
import PROFILE_IC from '../../images/profile_ic.png'
import HOME_IC_FILLED from "../../images/discover.png";
import ACTIVITY_IC_FILLED from "../../images/activity.png";
import CHAT_IC_FILLED from '../../images/chat.png'
import PROFILE_IC_FILLED from '../../images/profile.png'

import { GREY, WHITE_TWO, BLACK } from '../../constants';

//:- Tabbar Buttons
const TabBarNavigator = createBottomTabNavigator(
  {
    Discover: {
      screen: DiscoverNavigator,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => {
          const HomeIc = focused ? HOME_IC_FILLED : HOME_IC
          return (
            <Image source={HomeIc} style={styles.icon} />
          )
        }
      })
    },

    Activities: {
      screen: ActivityNavigator,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => {
          const ActivityIc = focused ? ACTIVITY_IC_FILLED : ACTIVITY_IC
          return (
            <Image source={ActivityIc} style={styles.icon} />
          )
        }
      })
    },

    Create: {
      screen: () => null,
      navigationOptions: (props) => ({
        tabBarIcon: () => (
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => { this.plusButtonHandler(props) }}
            style={styles.plusIcon} >
            <Image source={PLUS_IC} style={styles.plusIconImg} />
          </TouchableOpacity>
        ),
        tabBarOnPress: (tab, jumpToIndex) => {
        },
      })
    },

    Chat: {
      screen: ChatNavigator,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => {
          const ChatIc = focused ? CHAT_IC_FILLED : CHAT_IC
          return (
            <Image source={ChatIc} style={styles.icon} />
          )
        }
      })
    },

    Profile: {
      screen: ProfileNavigator,
      navigationOptions: () => ({
        tabBarIcon: ({ focused }) => {
          const ProfileIc = focused ? PROFILE_IC_FILLED : PROFILE_IC
          return (
            <Image source={ProfileIc} style={styles.icon} />
          )
        }
      })
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      showLabel: true,
      inactiveTintColor: GREY,
      activeTintColor: BLACK,
      allowFontScaling: false,
      tabStyle: {
        borderTopWidth: 0,
        borderTopColor: 'transparent',
        position: 'relative',
        backgroundColor: WHITE_TWO,
        elevation: 5,
      },
    },
    tabBarComponent: props => {
      return (
        <View>
          <TabBarComponent {...props} style={styles.tabBar} />
        </View>
      );
    }
  }
);

plusButtonHandler = (props) => {
  const {
    loadActiveChallenge
  } = this
  loadActiveChallenge(props)
}

loadActiveChallenge = (props) => {
  props.navigation.navigate('CreateActivityNavigator')
}

const TabBarComponent = props => <BottomTabBar {...props} />;

export default createStackNavigator({
  TabBarNavigator,
  CreateActivityNavigator,
  ActivityDetailNavigator,
}, {
	mode: 'modal',
	headerMode: 'none'
})



const styles = StyleSheet.create({
  tabBar: {
    borderTopColor: WHITE_TWO,
    backgroundColor: WHITE_TWO
  },

  icon: {
    height: 26,
    width: 26,
    resizeMode: "contain",
  },

  plusIcon: {
    height: (Platform.OS === 'android') ? 50 : 70,
    width: (Platform.OS === 'android') ? 50 : 70,
    position: (Platform.OS === 'android') ? 'relative' : 'absolute',
    ...ifIphoneX(
      {
        bottom: -16,
        left: 12,
      },
      {
        bottom: (Platform.OS === 'android') ? 0 : -16,
        left: 13,
      }
    ),
  },

  plusIconImg: {
    resizeMode: 'contain',
    height: 50,
    width: 50
  }
});
