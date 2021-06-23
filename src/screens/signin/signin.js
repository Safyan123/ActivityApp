import React, {Component} from 'react';
import { Keyboard } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextField } from 'react-native-materialui-textfield';

import {API_BASE_URL, LOGIN_URL} from '../../config/config';

import { textFieldStyle } from "../../common/styles";
import {
	deviceHeight,
	deviceWidth,
	IS_IOS,
	showAlertWithTitleAndMessage,
	validateEmail,
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
import LoadingIndicator from '../../components/loader';

import {
  HELVETICA,
	USER_LOGIN_OBJ,
	BLACK_ONE,
	WHITE,
  PURPLE_ONE,
  PURPLE_TWO,
	VALIDATION_TITLE,
	ENTER_EMAIL,
	ENTER_VALID_EMAIL,
	ENTER_PASSWORD,
} from '../../constants'
import { setAsyncStorageValueWithKey } from '../../common/localStorageHandler';


export default class Signin extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
			header: (
				<MainHeaderStyle>
					<MainHeader
						headerFontSize={20}
						backBtnText={'Back'}
            headerFontFamily={HELVETICA}
            headerColor={PURPLE_ONE}
            onBackPress={() => navigation.pop()}
          />
				</MainHeaderStyle>
			)
    }
  }

	constructor(props) {
		super(props)
		this.state = {
			userObj : {
				email: 'hasan.saadat@gmail.com',
				password: 'password',
			},
			signInProcessRunning: false,
		}
	}

	navigateToScreen = (route) => {
    const { navigation } = this.props
    navigation.navigate(route)
	}
	
	onForgotPress = () => {
		this.navigateToScreen('ForgotPasswordScreen')
	}
	
	onSignInPress = () => {
		const {
			state: {
				userObj
			},
			formValidations,
			navigateToLandingScreen
		} = this

		if (formValidations() === undefined) {
			return
		}

		const tempUser = {
			"user" : {
				"email": userObj.email,
				"password": userObj.password
			}
		}

		this.setState({signInProcessRunning: true})

		//:- call api request

		fetch(API_BASE_URL + LOGIN_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(tempUser)
		})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log('<-------- Login Response --------->', responseJson);

			if (responseJson != undefined) {

				this.setState({signInProcessRunning: false})
				setAsyncStorageValueWithKey(USER_LOGIN_OBJ, responseJson, () => {})
				navigateToLandingScreen()
			}else {
				console.log(' No ');
				this.setState({signInProcessRunning: false})
			}
		})
		.catch((error) => {
			console.log(error);
			this.setState({signInProcessRunning: false})
		});

	}

	formValidations = () => {
    const {
      state:{
        userObj: {
					email,
					password
				}
			}
		} = this
		
		Keyboard.dismiss()
    
		if(!email) return showAlertWithTitleAndMessage(VALIDATION_TITLE, ENTER_EMAIL)
		if(!validateEmail(email)) return showAlertWithTitleAndMessage(VALIDATION_TITLE, ENTER_VALID_EMAIL)
		if(!password) return showAlertWithTitleAndMessage(VALIDATION_TITLE, ENTER_PASSWORD)

		return true
	}

	navigateToLandingScreen = () => this.props.navigation.navigate("LoggedInNavigator")
  
  handleChange = (value, key) => {
		let {userObj} = this.state
    userObj[key] = value
		this.setState({ userObj})
	}

  renderInput = (label, key, secureTextEntry = false) => {
		const {formError, userObj} = this.state
		const value = userObj[key]
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
				value={value}
				onChangeText={text => this.handleChange(text, key)}
			/>
		)
	}
	
	render() {
		const {
      state:{
				signInProcessRunning,
			},
			onSignInPress,
			onForgotPress,
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
							text="Sign in"
						/>

						<ViewMargin marginBottom={16}>
							{renderInput('Email', 'email')}
						</ViewMargin>

            {renderInput('Password', 'password', true)}
						
						<AlignCenter>
							<CustomBtn
								btnMarginTop={50}
								btnText={signInProcessRunning ? "SINNING IN" : "SIGN IN"}
								btnBackgroundColor={PURPLE_TWO}
								fontSize={14}
								btnBorderRadius={20}
								fontFamily={HELVETICA}
								btnWidth='100%'
								isButtonDisable={signInProcessRunning}
								onPress={onSignInPress}
							/>

              <CustomBtn
                btnMarginTop={30}
								btnText='Forgot Password?'
								btnBackgroundColor='transparent'
                fontSize={15}
								textDecorationLine='underline'
								textColor={PURPLE_ONE} 
								onPress={onForgotPress}
							/>
						</AlignCenter>

					</PageWidth>
				</KeyboardAwareScrollView>

				<LoadingIndicator isVisible={signInProcessRunning} />
      </PageMainCon>
		);
  }  
}
