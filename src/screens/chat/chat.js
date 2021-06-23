import React, { Component } from 'react';
import {
	PageMainCon,
	MainHeaderStyle,
} from '../../common/commonStyles';

import MainHeader from "../../components/mainHeader";
import {
	HELVETICA,
	PURPLE_ONE,
} from '../../constants'

export default class Chat extends Component {

	static navigationOptions = ({ navigation }) => {
		return {
			header: (
				<MainHeaderStyle>
					<MainHeader
						headerFontSize={20}
						pageHeading={'Chat'}
						headerFontFamily={HELVETICA}
						headerColor={PURPLE_ONE}
					/>
				</MainHeaderStyle>
			)
		}
	}


	render() {
		return (
			<PageMainCon />
		);
	}

}
