import React, {Component} from 'react';
import {
  ScrollView
} from "react-native";

import LinearGradient from "react-native-linear-gradient"

import { gradientViewStyle } from "../../common/styles";
import {
	PageMainCon,
	FlexRowAndCenter,
	MainHeaderStyle,
  CustomImage,
} from '../../common/commonStyles';

import {
  HELVETICA,
  PURPLE_ONE,
	GREEN,
	RED_ONE,
	DISCOVER_LIST,
} from '../../constants'

import CustomTxt from '../../components/customTxt';
import MainHeader from '../../components/mainHeader';

import DUMMY_PROFILE from "../../images/girl.jpg";

export default class Dashboard extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
			header: (
				<MainHeaderStyle>
					<MainHeader
						pageHeading={'Discover'}
            headerFontSize={20}
            headerFontFamily={HELVETICA}
            headerColor={PURPLE_ONE}
          />
				</MainHeaderStyle>
			)
    }
  }

  navigateToScreen = (route) => {
    const { navigation } = this.props
    navigation.navigate(route)
  }

	renderInfoView = (obj, i) => {
    return (
			<LinearGradient
				key={i}
				colors={obj.colors}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 1.0, y: 0.0 }}
        useAngle= {true}
        angle= {60}
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
              source={DUMMY_PROFILE}
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
    )
  }
	
	render() {
		const {
			renderInfoView,
		} = this 

		return (
			<PageMainCon>
				<ScrollView>
					{ DISCOVER_LIST.map((obj, i) => (
						renderInfoView(obj, i)
					))}
				</ScrollView>
      </PageMainCon>
		);
  }
  
}
