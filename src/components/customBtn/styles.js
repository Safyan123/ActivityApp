import styled, {css} from 'styled-components'

export const BtnCon = styled.TouchableOpacity`
  ${props => props.btnMarginTop && css`marginTop: ${props.btnMarginTop}`};
  ${props => props.btnMarginBottom && css`marginBottom: ${props.btnMarginBottom}`};
  ${props => props.btnMarginLeft && css`marginLeft: ${props.btnMarginLeft}`};
  ${props => props.btnMarginRight && css`marginRight: ${props.btnMarginRight}`};
  ${props => props.btnWidthStyle && css`width: ${props.btnWidthStyle}`};
  ${props => props.btnPaddingHorizontal && css`paddingHorizontal: ${props.btnPaddingHorizontal}`};
  ${props => props.btnMarginVertical && css`marginVertical: ${props.btnMarginVertical}`};
  ${props => props.btnBottom && css`bottom: ${props.btnBottom}`};
  ${props => props.btnAlignSelf && css`alignSelf: ${props.btnAlignSelf}`};
  flexDirection: ${props => props.flexDirection ? 'column' : 'row' };
  backgroundColor: ${props => props.btnBackgroundColor || '#424141'};
  borderRadius: ${props => props.btnBorderRadius || 10};
  shadowRadius: ${props => props.shadowRadius ? props.shadowRadius : 15};
  ${props => props.btnOpacity && css`opacity: ${props.btnOpacity}`};
  height: ${props => props.btnHeight || 44};
  width: ${props => props.btnWidth || 185};
  position: ${props => props.btnPosition || 'relative'};
  alignItems: center;
  justifyContent: center;
  shadowOpacity: 0.2;
  shadowOffset: 0 5px;
  zIndex: 8;
  ${props => props.borderColor && css`borderColor: ${props.borderColor}`};
  ${props => props.borderColor && css`borderWidth: ${(props.borderColor || props.borderWidth) && 2}`};
  ${props => props.borderWidth && css`borderWidth: ${props.borderWidth || 2}`};
  shadowColor: ${props => props.boxShadowColor || "transparent"};
`

export const IconStyle = styled.Image`
  height: 24;
  width: 24;
  resizeMode: contain;
  position: absolute;
  left: 14;
`

export const ImgStyle = styled.Image`
  ${props => props.height && css`height: ${props.height}`};
  ${props => props.width && css`width: ${props.width}`};
  ${props => props.marginRight && css`marginRight: ${props.marginRight}`};
  ${props => props.marginLeft && css`marginLeft: ${props.marginLeft}`};
  ${props => props.marginBottom && css`marginBottom: ${props.marginBottom}`};
  ${props => props.tintColor && css`tintColor: ${props.tintColor}`};
  resizeMode: contain;
`

export const RedDot = styled.View`
  height: 10;
  width: 10;
  borderRadius: 5;
  backgroundColor: #EE1111;
  marginRight: 6;
`