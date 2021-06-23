import { createStackNavigator } from 'react-navigation'

import LandingNavigator from '../landing'

export default createStackNavigator({
	LandingNavigator,
}, {
	mode: 'modal',
	headerMode: 'none'
})