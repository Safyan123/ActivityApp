import React, {Component} from 'react';
import {
  ScrollView,
  Platform
} from "react-native";

import LinearGradient from "react-native-linear-gradient"
import {Calendar} from 'react-native-calendars';
import MapView from 'react-native-maps'
import StarRating from 'react-native-star-rating';

import {
	AlignCenter,
	PageWidth,
	PageMainCon,
  MainHeaderStyle,
  FlexRowAndCenter,
  CustomImage,
  ViewMargin,
  FlexRow,
} from '../../common/commonStyles';

import CustomBtn from '../../components/customBtn'
import CustomTxt from '../../components/customTxt';
import MainHeader from "../../components/mainHeader";
import {
  HELVETICA,
  PURPLE_ONE,
	GREEN,
	GREY,
  WHITE,
  BLACK,
  CONTRIBUTERS_LIST,
  RED,
  GOLDEN,
} from '../../constants'
import { IS_IPHONE_X } from '../../common/utility';

import MESSAGE_IC from "../../images/message_ic.png";
import USER_IC from "../../images/avatar_ic.png";
import USER_IMG from "../../images/girl.jpg";
import ARROW_IC from "../../images/arrow_right_ic.png";
import DOTS_IMG from "../../images/verticle_dots_img.png";


export default class ActivityDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
			header: (
				<MainHeaderStyle>
					<MainHeader
            onCrossPress={() => navigation.pop()}
          />
				</MainHeaderStyle>
			)
    }
  }

	constructor(props) {
		super(props)
		this.state = {
			selectedTheme: {
				index: 0,
				colors: [GREEN, GREY],
				label: 'one'
			},
      title: '',
      starCount: 3.5,
      mapTimeoutId: null,
      showMap: false,
		}
	}

  componentWillMount() {
    const { mapTimeoutId } = this.state

    if(!mapTimeoutId) {
      const mapTimeoutId = setTimeout(() => {
        clearTimeout(mapTimeoutId)
        this.setState({ showMap: true})
      }, 700)
			this.setState({ mapTimeoutId })
    }
    
  }

  componentWillUnmount() {
    clearTimeout(this.state.mapTimeoutId)
  }

  navigateToScreen = (route) => {
    const { navigation } = this.props
    navigation.navigate(route)
  }
  
  renderUserView = (obj) => {
    return (
			<ViewMargin marginTop={20}>

        <FlexRowAndCenter justifyContent="space-between">
					<FlexRowAndCenter>
						<CustomImage
							source={USER_IMG}
							height={80}
							width={80}
							resizeMode='cover'
							marginRight={10}
              borderRadius={40}
              borderWidth={1}
              borderColor={GREY}
						/>

						<ViewMargin>
							<FlexRowAndCenter justifyContent="flex-start">
							</FlexRowAndCenter>

              <CustomTxt
                fontFamily={HELVETICA}
                textColor={BLACK}
                fontSize= {15}
                letterSpacing= {0.1}
                text={"John Smith"}
                marginBottom={20}
              />

							<FlexRowAndCenter justifyContent="flex-start">
                <StarRating
                  disabled={true}
                  maxStars={5}
                  rating={this.state.starCount}
                  starSize={20}                  
                  fullStarColor={GOLDEN}
                  halfStarColor= {GOLDEN}
                  emptyStarColor={GOLDEN}
                  starStyle={{marginRight: 5}}
                  halfStarEnabled={true}
                />
							</FlexRowAndCenter>
						</ViewMargin>
					</FlexRowAndCenter>

					<CustomImage
						source={ARROW_IC}
						height={15}
						width={15}
						resizeMode='contain'
            justifyContent="flex-end"
            tintColor={BLACK}
					/>
				</FlexRowAndCenter>

        <CustomTxt
          fontFamily={HELVETICA}
          textColor={BLACK}
          fontSize= {13}
          letterSpacing= {0.1}
          
          text={"Lets play lasertag with me and 6 other people. It'll be fun. We'll aslo go to the club."}
          marginBottom={10}
          marginTop={10}
        />
			</ViewMargin>
    )
  }


  renderCalendarView = (obj) => {
    const eventDates = ['2019-06-16', '2019-07-18']
    let datee = eventDates[1]
    return (
			<ViewMargin>
        <FlexRowAndCenter justifyContent="space-between">
					
          <ViewMargin>
            <CustomImage
              source={DOTS_IMG}
              height={80}
              width={8}
              resizeMode='contain'
            />

            <CustomTxt
              fontFamily={HELVETICA}
              textColor={BLACK}
              fontSize= {15}
              letterSpacing= {0.1}
              text={"August 10,2019"}
              marginBottom={20}
            />

            <CustomTxt
              fontFamily={HELVETICA}
              textColor={BLACK}
              fontSize= {15}
              letterSpacing= {0.1}
              text={"08:00 pm"}
            />

            <CustomImage
              source={DOTS_IMG}
              height={80}
              width={8}
              resizeMode='contain'
            />
            
          </ViewMargin>

          <ViewMargin flex={1} marginLeft={10}>
            
            <Calendar
              hideArrows={true}
              hideExtraDays={true}
              disableMonthChange={true}
              calendarHeight={100}
              monthFormat={'MMMM, yyyy'}
              current={'2019-06-16'}
              style={{
                //height: 'auto',
                paddingBottom: 4,
                width:'100%',
                borderRadius:15,
              }}
              markedDates={{
                '2019-06-16': {
                  selected: true,
                  marked: false,
                  disableTouchEvent: true,
                },
              }}
              theme={{
                'stylesheet.calendar.header': {
                  header: {
                    marginTop: 2,
                    alignItems: 'center'
                  },
                  monthText: {
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: WHITE,
                    margin: 8
                  },
                  week: {
                    marginTop: 0,
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    color: WHITE
                  },
                  dayHeader: {
                    marginTop: 2,
                    marginBottom: 4,
                    width: 32,
                    textAlign: 'center',
                    fontSize: 10,
                    // fontFamily: appStyle.textDayHeaderFontFamily,
                    // fontWeight: appStyle.textDayHeaderFontWeight,
                    color: WHITE
                  },
                },
                
                'stylesheet.day.basic':{
                  'base':{
                    width:14,
                    height:14,
                    marginBottom: 0,
                    marginTop: 0,
                  },
                  'text': {
                    marginTop: 1,
                    marginBottom: 0,
                    fontSize: 9,
                    fontWeight: '100',
                    color: WHITE,
                    textAlign: 'center',
                    backgroundColor: 'rgba(25, 55, 255, 0)',
                  },
                },
                backgroundColor: GREEN,
                calendarBackground: GREEN,
                textSectionTitleColor: '#b6c1cd',
                selectedDayBackgroundColor: WHITE,
                selectedDayTextColor: '#000000',
                selectedDayTextAlign: 'center',
                todayTextColor: WHITE,
                //todayBackgroundColor: '#000000',
                dayTextColor: WHITE,
                textDisabledColor: '#d9e1e8',
                dotColor: '#00adf5',
                selectedDotColor: '#ffffff',
                arrowColor: 'orange',
                monthTextColor: WHITE,
                indicatorColor: 'blue',
                textDayFontWeight: '200',
                textMonthFontWeight: 'bold',
                textDayHeaderFontWeight: '200',
                textDayFontSize: 8,
                textMonthFontSize: 15,
                textDayHeaderFontSize: 8
              }}
            />

          </ViewMargin>

        </FlexRowAndCenter>
			</ViewMargin>
    )
  }

  renderMapView = (obj) => {
    const {
			state:{
        showMap,
      },
    } = this
    
    return (
			<ViewMargin>
        <CustomTxt
          fontFamily={HELVETICA}
          textColor={BLACK}
          fontSize= {15}
          letterSpacing= {0.1}
          text={"Victory Parade, London."}
          marginBottom={5}
          marginTop={5}
        />

        {showMap ?
          <MapView
            pointerEvents="none"
            style={{height:120, width:'100%', borderRadius:30}}
            region={{latitude: 43.130702, longitude: -76.214031, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}
            showsUserLocation={false}
          />
        :
          <ViewMargin
            borderRadius={30}
            height={120}
            width='100%'
            backgroundColor={'transparent'}
          />
        }
        

        
			</ViewMargin>
    )
  }

  renderContributerUser = (obj, i) => {
    return(
      <ViewMargin key={i} marginRight={10} marginBottom={10}>
        <CustomImage
          source={USER_IMG}
          height={30}
          width={30}
          resizeMode='cover'
          borderRadius={15}
          borderWidth={1}
          borderColor={GREY}
        />
        <CustomTxt
          fontFamily={HELVETICA}
          textColor={BLACK}
          fontSize= {10}
          letterSpacing= {0.1}
          text={"John"}
          textAlign='center'
        />
      </ViewMargin>
    )
  }

  renderContributerView = (obj) => {
    const {renderContributerUser} = this
    return (
			<ViewMargin>
        <CustomTxt
          fontFamily={HELVETICA}
          textColor={BLACK}
          fontSize= {15}
          letterSpacing= {0.1}
          text={"Contributers"}
          marginBottom={5}
          marginTop={20}
        />

        <FlexRow flexWrap={'wrap'}>
          { CONTRIBUTERS_LIST.map((obj, i) => (
						renderContributerUser(obj, i)
          ))}
        </FlexRow>
        
			</ViewMargin>
    )
  }

	render() {
		const {
			state:{
        selectedTheme,
      },
      renderUserView,
      renderCalendarView,
      renderMapView,
      renderContributerView,
		} = this

		return (
      <LinearGradient
        colors={selectedTheme.colors}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 0.0 }}
        useAngle= {true}
        angle= {100}
        style={{flex:1, paddingTop: IS_IPHONE_X ? 80 : 60}}
      >

        <FlexRowAndCenter justifyContent="space-between" paddingHorizontal={20} marginBottom={20}>
          <CustomTxt
            fontSize= {24}
            textColor={WHITE}
            letterSpacing= {0.25}
            lineHeight={28}
            text={'Play Lesertag'}
          />
          <CustomImage
            source={MESSAGE_IC}
            height={20}
            width={20}
            resizeMode='contain'
            marginRight={5}
            tintColor={WHITE}
          />
        </FlexRowAndCenter>

        <ViewMargin
          paddingVertical={5}
          paddingHorizontal={20}
          paddingBottom= {IS_IPHONE_X ? 25 : 0}
          borderBottom={1}
          borderTopLeftRadius={20}
          borderTopRightRadius={20}
          backgroundColor={WHITE}
          flex={1}
        >

          <ScrollView showsVerticalScrollIndicator={false}>
            {renderUserView()}
            {renderCalendarView()}
            {renderMapView()}
            {renderContributerView()}
          </ScrollView>
        </ViewMargin>

      </LinearGradient>
		);
  }
  
}
