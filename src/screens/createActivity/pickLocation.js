import React, {Component} from 'react';

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
} from '../../constants'


export default class PickLocation extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
			header: (
				<MainHeaderStyle>
					<MainHeader
						headerFontSize={20}
						pageHeading={'Search Location'}
            headerFontFamily={HELVETICA}
						headerColor={PURPLE_ONE}
            onBackPress={() => navigation.pop()}
          />
				</MainHeaderStyle>
			)
    }
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
							text=""
						/>
					</PageWidth>
      </PageMainCon>
		);
  }
  
}
