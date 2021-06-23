import React, { Component } from 'react';

import {
	AlignCenter,
	PageWidth,
	PageMainCon,
	MainHeaderStyle,
} from '../../common/commonStyles';

import CustomBtn from '../../components/customBtn'
import CustomTxt from '../../components/customTxt';
import MainHeader from "../../components/mainHeader";
import {
	HELVETICA,
	PURPLE_ONE,
	PURPLE_TWO,
} from '../../constants'


export default class Signin extends Component {
	static navigationOptions = ({ navigation }) => {
		return {
			header: null
		}
	}

	navigateToScreen = (route) => {
		const { navigation } = this.props
		navigation.navigate(route)
	}

	render() {
		const {
			navigateToScreen,
		} = this

		return (
			<PageMainCon>
				<PageWidth>
					<CustomTxt
						marginTop={20}
						marginBottom={50}
						textColor={PURPLE_ONE}
						fontSize={24}
						fontFamily={HELVETICA}
						text="Welcome Back,"
					/>

					<AlignCenter>
						<CustomBtn
							btnMarginTop={30}
							btnText={"SIGN IN"}
							btnBackgroundColor={PURPLE_TWO}
							fontSize={14}
							btnBorderRadius={20}
							fontFamily={HELVETICA}
							btnWidth='100%'
							onPress={() => navigateToScreen('SigninScreen')}
						/>

						<CustomBtn
							btnMarginTop={30}
							btnText={"SIGN UP"}
							btnBackgroundColor={PURPLE_TWO}
							fontSize={14}
							btnBorderRadius={20}
							fontFamily={HELVETICA}
							btnWidth='100%'
							onPress={() => navigateToScreen('SignupScreen')}
						/>
					</AlignCenter>
				</PageWidth>
			</PageMainCon>
		);
	}

}
