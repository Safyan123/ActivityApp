import {
  Dimensions,
  Platform,
  Alert
} from 'react-native'

export const deviceWidth = Dimensions.get('window').width
export const deviceHeight = Dimensions.get('window').height
export const IS_IPHONE_X = deviceHeight === 812 || deviceHeight === 896
export const IS_IOS = Platform.OS === 'ios'
export const IS_ANDROID = Platform.OS === 'android'
export const IS_IPAD = Platform.isPad
export const IS_IPHONE_5_OR_LESS = deviceHeight <= 568

export function validateEmail (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

export function round(value){
  return Math.round(value * 100) / 100
}

export function cleanRichText(richText) {
  return richText.replace(/<\/?[^>]+(>|$)/g, '')
}

export function getTitlizeStrig(val){
  return val.charAt(0).toUpperCase()+val.substr(1)
}

export function showAlertWithTitleAndMessage(title, message){
  Alert.alert(title, message, [])
}