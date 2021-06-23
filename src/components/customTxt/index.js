import React from "react";
import { TextStyle } from "./styles";
import { HELVETICA } from "../../constants";

class CustomTxt extends React.Component {
  render() {
    const {
      text,
      marginLeft,
      marginRight,
      marginBottom,
      marginTop,
      paddingTop,
      paddingRight,
      paddingLeft,
      textColor,
      fontSize,
      fontFamily,
      textAlign,
      textHeight,
      lineHeight,
      textDecorationLine,
      flex,
      numberOfLines,
      position,
      bottom,
      textDecorationColor,
      ...restProps
    } = this.props;

    return (
      <TextStyle
        txtHeight={textHeight}
        txtMarginLeft={marginLeft}
        txtMarginRight={marginRight}
        txtMarginBottom={marginBottom}
        txtMarginTop={marginTop}
        txtPaddingTop={paddingTop}
        txtPaddingRight={paddingRight}
        txtPaddingLeft={paddingLeft}
        txtColor={textColor}
        txtFontSize={fontSize}
        txtAllignment={textAlign}
        txtTextDecorationLine={textDecorationLine}
        textDecorationColor={textDecorationColor}
        txtLineHeight={lineHeight}
        txtFlex={flex}
        txtFontFamily={fontFamily ? fontFamily : HELVETICA}
        txtPosition={position}
        txtBottom={bottom}
        numberOfLines={numberOfLines ? numberOfLines : 7}
        {...restProps}
        allowFontScaling={false}>
        {text ? text : ""}
      </TextStyle>
    );
  }
}

export default CustomTxt;
