import React, {Component} from 'react';

import LinearGradient from "react-native-linear-gradient"

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
	GREEN,
	GREY,
} from '../../constants'


export default class Profile extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
			header: (
				<MainHeaderStyle>
					<MainHeader
						headerFontSize={20}
						pageHeading={'Profile'}
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
			selectedTheme: {
				index: 0,
				colors: [GREEN, GREY],
				label: 'one'
			},
			title: '',
		}
	}

  navigateToScreen = (route) => {
    const { navigation } = this.props
    navigation.navigate(route)
  }
  
	render() {
		const {
			state:{
				selectedTheme
			}
		} = this 

		return (
			<PageMainCon>
				<LinearGradient
					colors={selectedTheme.colors}
					start={{ x: 0.0, y: 0.0 }}
					end={{ x: 1.0, y: 0.0 }}
					useAngle= {true}
					angle= {100}
					style={{flex:1}}
				>

				</LinearGradient>
      </PageMainCon>
		);
  }
  
}
