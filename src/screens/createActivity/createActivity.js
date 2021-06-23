import React, {Component} from 'react';
import {
  ScrollView,
	View,
	TouchableOpacity,
	TextInput,
	Text,
	Keyboard,
	Switch,
} from "react-native";

import LinearGradient from "react-native-linear-gradient"
import { gradientViewStyle, circleGradientStyle, circleBorderStyle } from "../../common/styles";
import { TextField } from 'react-native-materialui-textfield';
import DatePicker from 'react-native-datepicker'

import { withSharedContext } from '../../context/sharedContext';

import { activityTextFieldStyle } from "../../common/styles";

import {
	AlignCenter,
	PageWidth,
	PageMainCon,
  MainHeaderStyle,
	FlexRow,
	ViewMargin,
} from '../../common/commonStyles';
import commonStyle from "../../common/styles"

import CustomBtn from '../../components/customBtn'
import CustomTxt from '../../components/customTxt';
import MainHeader from "../../components/mainHeader";
import LoadingIndicator from '../../components/loader';

import {
  HELVETICA,
  PURPLE_ONE,
	GRADIENT_LIST,
	SILVER,
	GOLDEN,
	BLACK,
	WHITE,
	BLACK_ONE,
	DARK_GREEN,
	PURPLE_TWO,
} from '../../constants'
import { IS_IPHONE_X } from '../../common/utility';

class CreateActivity extends Component {
  static navigationOptions = ({ navigation }) => {
		const {params} = navigation.state
    return {
			header: (
				<MainHeaderStyle>
					<MainHeader
						headerFontSize={20}
						pageHeading={'Create Activity'}
            headerFontFamily={HELVETICA}
						headerColor={PURPLE_ONE}
						rightBtnText='Done'
						onBackPress={() => navigation.pop()}
						onRightBtnPress={() => {params && params.myCreateActitity()}}
          />
				</MainHeaderStyle>
			)
    }
	}
	
	constructor(props) {
		super(props)
		this.state = {
			selectedThemeIndex: 0,
			title: '',
			detailText: '',
			whenHappen: '',
			whereHappen: '',
			notificationFlag: false,
		}
	}

	componentWillMount() {
		this.props.navigation.setParams({
			myCreateActitity: this.createActitity.bind(this)
		})
	}

  navigateToScreen = (route) => {
    const { navigation } = this.props
    navigation.navigate(route)
	}
	
	updateTheme = (obj, i) => {
		this.setState({
			selectedThemeIndex: i 
		})
	}

	async createActitity() {
		const {
			props: {
				servicesProvider,
			},
			state: {
				selectedThemeIndex,
				title,
				detailText,
				whenHappen,
				whereHappen,
				notificationFlag,
			}
		} = this

		const selectedTheme = GRADIENT_LIST[selectedThemeIndex]
		
		const activityObj = {
			"activity" : {
				"title": 'title',
				"description": 'detailText',
				"is_active": null,
				"lat": null,
				"lng": null,
				"event_time": null,
				"event_location": null,
				"event_notoification": null,
				"color_theme": selectedTheme.colors,
				"created_at": "2019-08-15T08:32:57.116Z",
				"updated_at": "2019-08-15T08:32:57.116Z",
				"contributer_id": 1,
				"user_id": 1
			}
		}
		console.log('async  ', this.props);
		console.log('activityObj  ', activityObj);
		
		if (servicesProvider) {
			const result = await servicesProvider.createActivityApi(activityObj)
			console.log('result------', result);
			
		}
		
	}
	
	renderFilters = () => {
		const { 
			state: {
				selectedThemeIndex
			},
			updateTheme
		} = this
    return(
			<ScrollView
				automaticallyAdjustContentInsets = {false}
				horizontal={true}
				showsHorizontalScrollIndicator={false}
				>
				{ GRADIENT_LIST.map((obj, i) => (
						<View key={i}>
							<TouchableOpacity
								onPress={() => {updateTheme(obj, i)}}
								>
								<LinearGradient
									colors={obj.colors}
									start={{ x: 0.0, y: 0.0 }}
									end={{ x: 1.0, y: 0.0 }}
									useAngle= {true}
									angle= {100}
									style={[circleGradientStyle, (selectedThemeIndex === i && circleBorderStyle)]}
								/>
							</TouchableOpacity>

							{selectedThemeIndex === i &&
								<ViewMargin
									width={4}
									height={4}
									borderRadius={2}
									backgroundColor={BLACK}
									marginLeft={28}
								/>
							}
						</View>
					))}
      </ScrollView>
    )
	}

	renderSwitchView = () => {
		const {
			state: {
				notificationFlag,
			}
		} = this
		return(
			<FlexRow
				flex={1}
				alignItems='center'
				justifyContent='space-between'
				paddingHorizontal={25}
				marginTop={20}
			>
				<CustomTxt
					textColor={WHITE}
					fontFamily={HELVETICA}
					fontSize={16}
					marginRight={20}
					text='Notifications'
				/>

				<Switch
					value={notificationFlag}
					onValueChange={notificationFlag=>this.setState({notificationFlag})}
				/>
			</FlexRow>
		)
	}

	renderDetailText = () => {
		const {
			state: {
				detailText,
			}
		} = this

		return(
			<ViewMargin paddingHorizontal={25} marginTop={25}>
				<TextInput
					style={commonStyle.borderedTextField}
					ref=""
					underlineColorAndroid='transparent'
					autoCapitalize="none"
					autoCorrect={false}
					enablesReturnKeyAutomatically
					onChangeText={() => {}}
					returnKeyType="next"
					keyboardType="default"
					placeholderTextColor={BLACK}
					selectionColor= {DARK_GREEN}
					value={detailText}
					placeholder="Briefly describe your plan..."
					placeholderTextColor={WHITE}
					onSubmitEditing={Keyboard.dismiss}
					allowFontScaling={false}
					numberOfLines={6}
					multiline={true}
					fontSize={14}
					onChangeText={text => this.handleChange(text, 'detailText')}
				/>
			</ViewMargin>
		)
	}

	renderField = (label, key) => {
		const value = this.state[key]

    return (
      <ViewMargin paddingHorizontal={25}>
				<TextField
					keyboardType={'default'}
					backgroundColor={'transparent'}
					label={label}
					containerStyle={activityTextFieldStyle}
					lineWidth={2}
					activeLineWidth={2}
					labelHeight={16}
					labelPadding={0}	
					labelTextStyle={{fontSize: 12}}
					tintColor={WHITE}
					baseColor={WHITE}
					textColor={WHITE}
					autoCapitalize='none'
					autoCorrect={false}
					value={value}
					onChangeText={text => this.handleChange(text, key)}
				/>
				{key === 'title' &&
					<CustomTxt
						text='A Creative title is more like to get others attention'
						textColor={WHITE}
						fontSize={10}
					/>
				}
			</ViewMargin>
    )
  }

	handleChange = (value, key) => {
		this.setState({[key]: value})
	}
	
	getDoB = () => {
    return(
			<DatePicker
				style={{width: '100%'}}
				date={this.state.whenHappen}
				mode="datetime"
				androidMode='spinner'
				placeholder="Seelct date time"
				format="YYYY-MM-DD HH:mm"
				minDate="2019-05-01"
				maxDate="2025-06-01"
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
				onDateChange={(date) => {this.handleChange(date, 'whenHappen')}}
			/>
    )
	}

	renderInputView = () => {
		const {
			renderField,
			renderDetailText,
			renderSwitchView,
			navigateToScreen,
		} = this

		return(
			<ViewMargin>
				{renderField("Add a title...",'title')}

				{renderDetailText()}

				{renderField("When is it happening?",'whenHappen')}
				<View style={{position: 'relative', zIndex: 999, marginTop: -50, opacity: 0}}>
					{this.getDoB()}
				</View>

				{renderField("Where is it happening?",'whereHappen')}
				<View style={{position: 'relative', zIndex: 999, marginTop: -50, opacity: 1, marginHorizontal:25}}>
					<CustomBtn
						btnBackgroundColor={'transparent'}
						btnWidth='100%'
						onPress={() => navigateToScreen('PickLocationScreen')}
					/>
				</View>

				{renderSwitchView()}
			</ViewMargin>
		)
	}
	
	render() {
		const {
			props: {
				servicesProvider,
        servicesProvider: {
          isRequestInProcess,
        }
      },
			state: {
				selectedThemeIndex,
			},
			renderFilters,
			renderInputView,
		} = this 
		const selectedTheme = GRADIENT_LIST[selectedThemeIndex]

		
		return (
			<View style={{paddingTop: IS_IPHONE_X ? 95 : 75, flex: 1}}>
				
				<LinearGradient
					colors={selectedTheme.colors}
					start={{ x: 0.0, y: 0.0 }}
					end={{ x: 1.0, y: 0.0 }}
					useAngle= {true}
					angle= {100}
					style={{flex:1}}
				>
					<ViewMargin paddingLeft={10} backgroundColor={WHITE} paddingBottom={10}>
					
					{renderFilters()}
					</ViewMargin>

					<ScrollView>
						{renderInputView()}
					</ScrollView>

				</LinearGradient>

				<LoadingIndicator isVisible={isRequestInProcess} />
      </View>
		);
  }
  
}

export default withSharedContext(CreateActivity)