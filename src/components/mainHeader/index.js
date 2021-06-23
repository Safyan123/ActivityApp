import React from "react";

import {
  FlexRowAndCenter,
  PageWidth,
  FlexRow
} from "../../common/commonStyles";
import {
  DARK_GREY,
  HELVETICA,
  BLACK_ONE,
  WHITE,
} from "../../constants";
import {
  BackBtnCon,
  BackIc
} from "./styles";

import CustomTxt from "../customTxt"
import CustomBtn from "../customBtn"

import BACK_IC from "../../images/back_arrow.png";
import CROSS_IC from '../../images/cross_ic.png'

export default class MainHeader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    const {
      props: {
        onBackPress,
        pageHeading,
        headerColor,
        headerFont,
        headerFontSize,
        onRightBtnPress,
        backBtnText,
        rightBtnText,
        onCrossPress,
      }
    } = this;

    return (
      <PageWidth>
        <FlexRowAndCenter>
          { onBackPress && (
            <BackBtnCon onPress={onBackPress}>
              <BackIc
                source={BACK_IC}
                style={{ tintColor: headerColor ? headerColor : DARK_GREY }}
              />
              {backBtnText &&
                <CustomTxt
                  fontSize={16}
                  fontFamily={headerFont || HELVETICA}
                  textColor={headerColor || DARK_GREY}
                  paddingLeft={20}
                  lineHieght={30}
                  text={backBtnText}
                />
              }
            </BackBtnCon>
          )}

          <CustomTxt
            fontSize={headerFontSize || 16}
            fontFamily={headerFont || HELVETICA}
            textColor={headerColor || DARK_GREY}
            flex={1}
            textAlign="center"
            marginLeft={onBackPress ? -30 : 0}
            marginRight={rightBtnText ? -50 : 0}
            paddingLeft={30}
            paddingRight={30}
            lineHieght={30}
            text={pageHeading || ""}
          />

          { rightBtnText &&
            <CustomBtn
              btnWidth={40}
              btnHeight={40}
              textColor={BLACK_ONE}
              btnBackgroundColor='transparent'
              btnText={rightBtnText}
              fontSize={16}
              onPress={onRightBtnPress}
            />
          }

          { onCrossPress && (
            <BackBtnCon onPress={onCrossPress}>
              <BackIc
                source={CROSS_IC}
                style={{ tintColor: headerColor ? headerColor : WHITE }}
              />
            </BackBtnCon>
          )}
        </FlexRowAndCenter>
      </PageWidth>
    );
  }
}
