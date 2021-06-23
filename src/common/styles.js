import { StyleSheet } from 'react-native'
import { WHITE, BLACK } from '../constants';

module.exports = StyleSheet.create({
  textFieldStyle: {
		width:'100%',
		backgroundColor: WHITE,
    borderRadius: 2
	},

	activityTextFieldStyle: {
		width:'100%',
		backgroundColor: 'transparent',
    borderRadius: 2
	},

	gradientViewStyle: {
		marginHorizontal: 14,
		marginTop: 14,
		paddingHorizontal: 16,
		paddingVertical: 13,
		borderWidth: 0,
		borderColor: BLACK,
		borderRadius: 24,
	},

	circleGradientStyle: {
		marginHorizontal: 15,
		marginTop: 5,
		marginBottom: 5,
		// paddingHorizontal: 16,
		//paddingVertical: 13,		
		borderRadius: 15,
		height: 30,
		width: 30,
	},

	circleBorderStyle: {
		borderColor: BLACK,
		borderWidth: 2,
	},

	borderedTextField: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: WHITE,
    color: WHITE,
    fontSize: 18,
    marginTop: 0,
    height: 100,
    paddingTop: 8,
    paddingBottom: 8,
    fontFamily: 'Avenir-Roman',
    marginBottom: 15,
    borderRadius: 8,
    paddingLeft: 15,
    paddingRight: 15
  },
	
})
