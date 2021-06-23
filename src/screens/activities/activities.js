import React, {Component} from 'react';
import {
  ScrollView,
  View,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";

import { withSharedContext } from '../../context/sharedContext';

import LinearGradient from "react-native-linear-gradient"

import { gradientViewStyle } from "../../common/styles";
import {
	PageMainCon,
	FlexRowAndCenter,
	MainHeaderStyle,
  CustomImage,
  FlexRow,
  ViewMargin,
} from '../../common/commonStyles';
import { IS_IPHONE_X } from '../../common/utility';
import {
  HELVETICA,
  PURPLE_ONE,
	ACTIVITY_LIST,
	GREEN,
  BLACK_ONE,
  BLACK,
  FILTERS_LIST,
  GREY,
  WHITE,
  FILTERS_LIST_TWO,
} from '../../constants'

import CustomTxt from '../../components/customTxt';
import CustomButton from '../../components/customBtn';
import MainHeader from '../../components/mainHeader';
import LoadingIndicator from '../../components/loader';

import USER_IMG from "../../images/girl.jpg";
import FILTER_IC from "../../images/filter_ic.png";


class Activity extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
			header: (
				<MainHeaderStyle>
					<MainHeader
						pageHeading={'Activities'}
            headerFontSize={20}
            headerFontFamily={HELVETICA}
            headerColor={PURPLE_ONE}
          />
				</MainHeaderStyle>
			)
    }
  }

  constructor(props) {
		super(props)
		this.state = {
      filterIndex: -1,
      activeFilterIndex: -1,
		}
  }
  
  async componentDidMount() {
    const {
      props: {
        servicesProvider,
      },
    } = this

    if (servicesProvider) {
      servicesProvider.getAllActivities()
    }
  }

  navigateToScreen = (route) => {
    const { navigation } = this.props
    navigation.navigate(route)
  }
	
	renderListView = (obj, i) => {
    const {navigateToScreen} = this
    return (
      <TouchableOpacity
        key={i}
        activeOpacity={1}
        onPress={() => navigateToScreen('ActivityDetailNavigator')}
      >
        <LinearGradient
          colors={[GREEN, GREY]}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 1.0, y: 0.0 }}
          useAngle= {true}
          angle= {100}
          style={gradientViewStyle}
        >
          <FlexRowAndCenter
            justifyContent="space-between"
            marginBottom={20}
          >
            <CustomTxt
              fontFamily={HELVETICA}
              fontSize= {14}
              letterSpacing= {0.1}
              flex={1}
              text={obj.title}
            />

            <CustomTxt
              fontFamily={HELVETICA}
              fontSize= {10}
              letterSpacing= {0.1}
              text={obj.title}
            />
          </FlexRowAndCenter>

          <FlexRowAndCenter justifyContent="space-between">
            <FlexRowAndCenter>
              <CustomImage
                source={USER_IMG}
                height={40}
                width={40}
                resizeMode='cover'
                marginRight={5}
                borderRadius={20}
              />

              <CustomTxt
                fontFamily={HELVETICA}
                fontSize= {10}
                letterSpacing= {0.1}
                text={obj.title}
              />
            </FlexRowAndCenter>
            
            <CustomTxt
              fontSize= {14}
              letterSpacing= {0.25}
              lineHeight={20}
              marginBottom={10}
              text={obj.name}
            />
          </FlexRowAndCenter>
        
        </LinearGradient>
      </TouchableOpacity>
    )
  }
  
  renderHeaderOptions = () => {
    return(
      <FlexRow justifyContent='space-around'>

        <CustomButton
          flex={1}
          textColor={BLACK_ONE}
          btnHeight={32}
          btnText={'All'}
          fontSize={14}
          btnMarginRight={8}
          btnMarginBottom={5}
          btnBackgroundColor='transparent'
          onPress={() => {}}
        />

        <CustomButton
          flex={1}
          textColor={BLACK_ONE}
          btnHeight={32}
          btnText={'By Me'}
          fontSize={14}
          btnMarginRight={8}
          btnMarginBottom={5}
          btnBackgroundColor='transparent'
          onPress={() => {}}
        />

        <CustomButton
          flex={1}
          textColor={BLACK_ONE}
          btnHeight={32}
          btnText={'By Others'}
          fontSize={14}
          btnMarginRight={8}
          btnMarginBottom={5}
          btnBackgroundColor='transparent'
          onPress={() => {}}
        />
      </FlexRow>
    )
  }

  updateSelectedFilter = (i) => {
    this.setState({filterIndex: i})
  }

  updateActiveFilter = (i) => {
    this.setState({activeFilterIndex: i})
  }

  renderFilters = () => {
    const {
       state:{
        filterIndex,
        activeFilterIndex
      },
      updateSelectedFilter,
      updateActiveFilter
    } = this
    return(
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <FlexRowAndCenter paddingHorizontal={15} paddingBottom={15} paddingTop={5}>
          <CustomImage
            source={FILTER_IC}
            height={20}
            width={20}
            resizeMode='contain'
            marginLeft={5}
            marginRight={5}
          />

          <FlexRow borderWidth={2} borderColor={'transparent'} borderRightColor={PURPLE_ONE}>
            { FILTERS_LIST.map((obj, i) => (
                <CustomButton
                  key={i}
                  btnWidth='auto'
                  btnPaddingHorizontal={12}
                  btnBackgroundColor={filterIndex === i ? PURPLE_ONE : WHITE}
                  textColor={filterIndex === i ? WHITE : PURPLE_ONE}
                  borderWidth={2}
                  borderColor={PURPLE_ONE}
                  btnBorderRadius={35}
                  btnHeight={32}
                  btnText={obj.title}
                  fontSize={14}
                  btnMarginRight={8}
                  onPress={() => {updateSelectedFilter(i)}}
                />
              ))
            }
          </FlexRow>
          
          <FlexRow marginLeft={10}>
          { FILTERS_LIST_TWO.map((obj, i) => (
              <CustomButton
                key={i}
                btnWidth='auto'
                btnPaddingHorizontal={12}
                btnBackgroundColor={activeFilterIndex === i ? PURPLE_ONE : WHITE}
                textColor={activeFilterIndex === i ? WHITE : PURPLE_ONE}
                borderWidth={2}
                borderColor={PURPLE_ONE}
                btnBorderRadius={35}
                btnHeight={32}
                btnText={obj.title}
                fontSize={14}
                btnMarginRight={8}
                onPress={() => {updateActiveFilter(i)}}
              />
            ))
          }
          </FlexRow>
        </FlexRowAndCenter>
      </ScrollView>
    )
  }
	
	render() {
		const {
      props: {
        servicesProvider,
        servicesProvider: {
          isRequestInProcess,
          allActivities,
        }
      },
      renderHeaderOptions,
      renderFilters,
			renderListView,
		} = this 

		return (
      <ViewMargin marginTop={IS_IPHONE_X ? 80 : 60}>
        {renderHeaderOptions()}
        
        {renderFilters()}

        <ScrollView>
					{/* { ACTIVITY_LIST.map((obj, i) => (
						renderListView(obj, i)
          ))}
           */}
          {servicesProvider && allActivities.map((obj, i) => (
						renderListView(obj, i)
          ))}
          
				</ScrollView>

        <LoadingIndicator isVisible={isRequestInProcess} />
      </ViewMargin>
		);
  }
  
}

export default withSharedContext(Activity)