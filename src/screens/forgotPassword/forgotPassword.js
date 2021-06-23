import React, {Component} from 'react';
import {
	Alert,
	Keyboard,
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextField } from 'react-native-materialui-textfield';

import { textFieldStyle } from "../../common/styles";
import {
	deviceHeight,
	deviceWidth,
	IS_IOS,
} from '../../common/utility'
import {
	AlignCenter,
	PageWidth,
	ViewMargin,
	PageMainCon,
  MainHeaderStyle,
} from '../../common/commonStyles';

import CustomBtn from '../../components/customBtn'
import CustomTxt from '../../components/customTxt';
import MainHeader from "../../components/mainHeader";

import {
  HELVETICA,
	USER_LOGIN_OBJ,
	BLACK_ONE,
	WHITE,
  PURPLE_ONE,
  PURPLE_TWO,
} from '../../constants'


export default class ForgotPassword extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
			header: (
				<MainHeaderStyle>
					<MainHeader
            headerFontSize={20}
            headerFontFamily={HELVETICA}
						headerColor={PURPLE_ONE}
						backBtnText={'Back'}
            onBackPress={() => navigation.pop()}
          />
				</MainHeaderStyle>
			)
    }
  }

	constructor(props) {
		super(props)
		this.state = {
			userCredentials : {
				email: '',
			},
			forgotProcessRunning: false,
		}
	}
  
  handleChange = (value, key) => {
		let {userCredentials} = this.state
    userCredentials[key] = value
		this.setState({ userCredentials})
	}

  renderInput = (label, key, secureTextEntry = false) => {
		const {formError, userCredentials} = this.state
		const value = userCredentials[key]
		return (
			<TextField
				label={label}
				error={formError && !value ? errorMsg : ''}
				containerStyle={textFieldStyle}
				lineWidth={4}
				activeLineWidth={4}
				labelHeight={16}
				labelPadding={0}	
				labelTextStyle={{fontSize: 12}}
				tintColor={BLACK_ONE}
				secureTextEntry={secureTextEntry}
				autoCapitalize='none'
				autoCorrect={false}
				onChangeText={text => this.handleChange(text, key)}
			/>
		)
	}
	
	render() {
		const {
      state:{
        userCredentials,
				forgotProcessRunning,
			},
			onForgotPasswordPress,
			renderInput,
		} = this 

		return (
			<PageMainCon>
        <KeyboardAwareScrollView
          style={{zIndex: 3, width: deviceWidth}}
          keyboardShouldPersistTaps="handled"
          enableOnAndroid={true}
          keyboardDismissMode={'interactive'}
          showsVerticalScrollIndicator={false}
          scrollToEnd={true}
          extraHeight={IS_IOS ? (deviceHeight / 2.7) : 0}
        >
					<PageWidth>
						<CustomTxt
							marginTop={20}
							marginBottom={18}
							textColor={PURPLE_ONE}
							fontSize={24}
							fontFamily={HELVETICA}
							text="Forgot Password"
						/>

						<ViewMargin marginBottom={16}>
							{renderInput('Email', 'email')}
						</ViewMargin>
						
						<AlignCenter>
							<CustomBtn
								btnMarginTop={50}
								btnText={"SUBMIT"}
								btnBackgroundColor={PURPLE_TWO}
								fontSize={14}
								btnBorderRadius={20}
								fontFamily={HELVETICA}
								btnWidth='100%'
								isButtonDisable={forgotProcessRunning}
								onPress={onForgotPasswordPress}
							/>
						</AlignCenter>

					</PageWidth>
				</KeyboardAwareScrollView>
      </PageMainCon>
		);
  }  
}
