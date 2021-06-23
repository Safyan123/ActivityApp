import React, {Component} from 'react';
import { Keyboard, View } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextField } from 'react-native-materialui-textfield';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker'

import { API_BASE_URL, SIGNUP_URL } from '../../config/config';

import { textFieldStyle } from "../../common/styles";
import {
	deviceHeight,
	deviceWidth,
	IS_IOS,
	validateEmail,
	showAlertWithTitleAndMessage,
} from '../../common/utility'
import {
	AlignCenter,
	PageWidth,
	ViewMargin,
	PageMainCon,
  MainHeaderStyle,
} from '../../common/commonStyles';
import { setAsyncStorageValueWithKey } from '../../common/localStorageHandler';

import CustomBtn from '../../components/customBtn'
import CustomTxt from '../../components/customTxt';
import MainHeader from "../../components/mainHeader";
import LoadingIndicator from '../../components/loader';

import {
  HELVETICA,
	BLACK_ONE,
  PURPLE_ONE,
  PURPLE_TWO,
	VALIDATION_TITLE,
	ENTER_NAME,
	ENTER_GENDER,
	ENTER_DOB,
	ENTER_PASSWORD,
	ENTER_EMAIL,
	ENTER_VALID_EMAIL,
	GENDER_OPTIONS,
	USER_LOGIN_OBJ,
} from '../../constants'


export default class Signup extends Component {
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
				name: 'Ahmed',
				email: 'test+1@gmail.com',
				password: 'password',
				dob: '',
				gender: '',
			},
			isignupProcessRunning: false,
		}
	}

	componentDidMount() {
  }
	
	formValidations = () => {
    const {
      state:{
        userCredentials: {
					name,
					email,
					password,
					dob,
					gender
				},
			}
		} = this
		
		Keyboard.dismiss()
    
		if(!name) return showAlertWithTitleAndMessage(VALIDATION_TITLE, ENTER_NAME)
		if(!email) return showAlertWithTitleAndMessage(VALIDATION_TITLE, ENTER_EMAIL)
		if(!validateEmail(email)) return showAlertWithTitleAndMessage(VALIDATION_TITLE, ENTER_VALID_EMAIL)
		if(!password) return showAlertWithTitleAndMessage(VALIDATION_TITLE, ENTER_PASSWORD)
		if(!dob) return showAlertWithTitleAndMessage(VALIDATION_TITLE, ENTER_DOB)
		if(!gender) return showAlertWithTitleAndMessage(VALIDATION_TITLE, ENTER_GENDER)

		return true
	}

	onSignUpPress = () => {
		const {
			state: {
				userCredentials: {
					name,
					email,
					password,
					dob,
					gender
				},
			},
			formValidations,
			callSignupApi
		} = this

		if (formValidations() === undefined) {
			return
		}

		const userObj = {
			"user" : {
				"username": name,
				"email": email,
				"password": password,
				"password_confirmation": password
			}
		}

		this.setState({isignupProcessRunning: true})

		//:- call api request
		callSignupApi(userObj)
	}
	
	callSignupApi = (userObj) => {
		const {
			navigateToLandingScreen
		} = this
		
		fetch(API_BASE_URL + SIGNUP_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(userObj)
		})
		.then((response) => response.json())
		.then((responseJson) => {
			console.log('<-------- Signup Response --------->', responseJson);

			if (responseJson != undefined) {

				this.setState({isignupProcessRunning: false})
				setAsyncStorageValueWithKey(USER_LOGIN_OBJ, responseJson, () => {})
				navigateToLandingScreen()
			}else {
				console.log(' No ');
				this.setState({isignupProcessRunning: false})
			}
		})
		.catch((error) => {
			console.log(error);
			this.setState({isignupProcessRunning: false})
		});
	}

	navigateToLandingScreen = () => this.props.navigation.navigate("LoggedInNavigator")

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
				keyboardType={key === 'email' ? 'email-address' : 'default'}
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

	getDoB = () => {
    return(
			<DatePicker
				style={{width: '100%'}}
				date={this.state.userCredentials.dob}
				mode="date"
				androidMode='spinner'
				placeholder="Date of birth"
				format="YYYY-MM-DD"
				minDate="1970-05-01"
				maxDate="2010-06-01"
				confirmBtnText="Confirm"
				cancelBtnText="Cancel"
				customStyles={{
					dateIcon: {
						position: 'absolute',
						display:'none',
						left: 0,
						top: 4,
						marginLeft: 0
					},
					dateInput: {
						border:'none'
					}
				}}
				onDateChange={(date) => {this.handleChange(date, 'dob')}}
			/>
    )
	}
	
	renderDropDown = () => {
		return(
			<View style={{marginTop: 10}}>
			<Dropdown
				label='Gender'
				data={GENDER_OPTIONS}
				labelHeight={16}
				labelTextStyle={12}
				inputContainerStyle={{borderBottomWidth: 4}}
				tintColor={BLACK_ONE}
				containerStyle={{width:'100%'}}
				value={this.state.userCredentials.gender}
				onChangeText={selectedUnit =>  this.handleChange(selectedUnit, 'gender')}
			/>
			</View>
		)
	}
	
	render() {
		const {
      state:{
				isignupProcessRunning,
			},
			onSignUpPress,
			renderInput,
			renderDropDown,
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
							text="Create a new account"
						/>

						<ViewMargin marginBottom={16}>
							{renderInput('Name', 'name')}
							{renderInput('Email', 'email')}
							{renderInput('Password', 'password', true)}
							{renderInput('Date of birth', 'dob')}
							<View style={{position: 'relative', zIndex: 999, marginTop: -50, opacity: 0}}>
								{this.getDoB()}
							</View>
							{renderDropDown()}
						</ViewMargin>
						
						<AlignCenter>
							<CustomBtn
								btnMarginTop={50}
								btnText={isignupProcessRunning ? "SINNING UP" : "SIGN UP"}
								btnBackgroundColor={PURPLE_TWO}
								fontSize={14}
								btnBorderRadius={20}
								fontFamily={HELVETICA}
								btnWidth='100%'
								isButtonDisable={isignupProcessRunning}
								onPress={onSignUpPress}
							/>
						</AlignCenter>

					</PageWidth>
				</KeyboardAwareScrollView>

				<LoadingIndicator isVisible={isignupProcessRunning} />
      </PageMainCon>
		);
  } 
}