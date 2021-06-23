import React from 'react';

import {
	deviceHeight,
	deviceWidth
} from '../../common/utility';
import {
	AlignCenter,
	CustomImage,
} from '../../common/commonStyles';
import {
	BLACK_FOUR,
	RIPPLE_IMG,
	WHITE,
	HELVETICA,
} from '../../constants';

import CustomTxt from '../customTxt';

export default class Loader extends React.Component {
  render() {
		const {
			props: {
				isVisible,
				text,
			}
		} = this

		return (
			isVisible ?
			<AlignCenter
				position= 'absolute'
				height={deviceHeight}
				width={deviceWidth}
				top= {0}
				left= {0}
				backgroundColor= {BLACK_FOUR}
				opacity= {.8}
				justifyContent= 'center'
				zIndex={9}
			>
				<CustomImage
					width={80}
					height={80}
					source={RIPPLE_IMG}
				/>

				<CustomTxt
					fontSize={18}
					textColor={WHITE}
					fontFamily={HELVETICA}
					textAlign='center'
					text={text || 'Loading...'}
				/>
			</AlignCenter>
			:
			<AlignCenter />
		)
  }
}