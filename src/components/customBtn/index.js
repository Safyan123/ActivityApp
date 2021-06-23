import React from "react";
import {
  View
} from 'react-native';
import Icon from "react-native-ionicons";

import { BtnCon} from "./styles";
import { GREEN_ONE } from "../../constants";
import CustomTxt from "../customTxt";
import { CustomImage } from "../../common/commonStyles";

export default class CustomBtn extends React.Component {
  render() {
    const {
      btnText,
      secondText,
      secondColor,
      image,
      textColor,
      iconName,
      secondIconName,
      iconColor,
      leftImage,
      position,
      onPress,
      ...props
    } = this.props;

    return (
      <BtnCon
        {...props}
        position={position}
        onPress={onPress}
      >
        { (iconName || leftImage) &&
          <View marginRight={10}>
            { iconName &&
              <Icon name={iconName} color={textColor} />
            }

            { leftImage &&
              <CustomImage
                source={leftImage}
                width={20}
              />
            }
          </View>
        }

        { secondIconName &&
          <View
            marginRight={10}
            position='absolute'
            right={5}
            >
            <Icon name={secondIconName} color={iconColor || GREEN_ONE} />
          </View>
        }

        <CustomTxt
          textAlign="center"
          textColor={textColor}
          text={btnText ? btnText : ""}
          {...props}
        />


        {image && <CustomImage
          resizeMode='contain'
          marginLeft={10}
          maxWidth={40}
          source={image}
        />}

        {secondText && <CustomTxt text={secondText} textColor={secondColor} />}
      </BtnCon>
    )
  }
}
