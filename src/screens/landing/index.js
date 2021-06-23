import { createStackNavigator } from 'react-navigation'
import LandingScreen from './landing'
import SigninScreen from '../signin'
import SignupScreen from '../signup'
import ForgotPasswordScreen from '../forgotPassword'

export default createStackNavigator({
  LandingScreen,
  SigninScreen,
  ForgotPasswordScreen,
  SignupScreen
},{
  headerMode: 'none',
  defaultNavigationOptions: {
		gesturesEnabled: false,
	}
})