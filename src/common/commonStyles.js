import styled, {css} from 'styled-components'
import {
  IS_IPHONE_X,
  LIGHT_GREY,
  deviceWidth,
  IS_ANDROID,
} from '../common/utility'


export const Section = styled.View`
  paddingHorizontal: 16;
  paddingVertical: 22;
`

export const CustomTouchable = styled.TouchableOpacity`
  ${props => props.alignSelf && css`alignSelf: ${props.alignSelf}`};
  ${props => props.height && css`height: ${props.height}`};
  ${props => props.width && css`width: ${props.width}`};
  ${props => props.opacity && css`opacity: ${props.opacity}`};
  ${props => props.borderRadius && css`borderRadius: ${props.borderRadius}`};
  ${props => props.backgroundColor && css`backgroundColor: ${props.backgroundColor}`};
  ${props => props.justifyContent && css`justifyContent: ${props.justifyContent}`};
  ${props => props.alignItems && css`alignItems: ${props.alignItems}`};
  ${props => props.marginLeft && css`marginLeft: ${props.marginLeft}`};
  ${props => props.marginRight && css`marginRight: ${props.marginRight}`};
  ${props => props.marginTop && css`marginTop: ${props.marginTop}`};
  ${props => props.marginBottom && css`marginBottom: ${props.marginBottom}`};
  ${props => props.marginVertical && css`marginVertical: ${props.marginVertical}`};
  ${props => props.marginHorizontal && css`marginHorizontal: ${props.marginHorizontal}`};
  ${props => props.paddingHorizontal && css`paddingHorizontal: ${props.paddingHorizontal}`};
  ${props => props.paddingVertical && css`paddingVertical: ${props.paddingVertical}`};
  ${props => props.paddingTop && css`paddingTop: ${props.paddingTop}`};
  ${props => props.paddingBottom && css`paddingBottom: ${props.paddingBottom}`};
  ${props => props.position && css`position: ${props.position}`};
  ${props => props.top && css`top: ${props.top}`};
  ${props => props.bottom && css`bottom: ${props.bottom}`};
  ${props => props.right && css`right: ${props.right}`};
  ${props => props.left && css`left: ${props.left}`};
  ${props => props.flex && css`flex: ${props.flex}`};
  ${props => props.borderWidth && css`borderWidth: ${props.borderWidth}`};
  ${props => props.borderBottomWidth && css`borderBottomWidth: ${props.borderBottomWidth}`};
  ${props => props.borderColor && css`borderColor: ${props.borderColor}`};
  ${props => props.flexDirection && css`flexDirection: ${props.flexDirection}`};
`

export const ViewMargin = styled.View`
  ${props => props.marginBottom && css`marginBottom: ${props.marginBottom}`};
  ${props => props.marginTop && css`marginTop: ${props.marginTop}`};
  ${props => props.marginLeft && css`marginLeft: ${props.marginLeft}`};
  ${props => props.marginRight && css`marginRight: ${props.marginRight}`};
  ${props => props.alignItems && css`alignItems: ${props.alignItems}`};
  ${props => props.flex && css`flex: ${props.flex}`};
  ${props => props.marginHorizontal && css`marginHorizontal: ${props.marginHorizontal}`};
  ${props => props.paddingHorizontal && css`paddingHorizontal: ${props.paddingHorizontal}`};
`

export const ViewPadding = styled.View`
  ${props => props.paddingBottom && css`paddingBottom: ${props.paddingBottom}`};
  ${props => props.paddingTop && css`paddingTop: ${props.paddingTop}`};
  ${props => props.paddingLeft && css`paddingLeft: ${props.paddingLeft}`};
  ${props => props.paddingRight && css`paddingRight: ${props.paddingRight}`};
  ${props => props.alignItems && css`alignItems: ${props.alignItems}`};
`

export const ViewPosition = styled.View`
  ${props => props.position && css`position: ${props.position}`};
  ${props => props.marginTop && css`marginTop: ${props.marginTop}`};
  ${props => props.marginBottom && css`marginBottom: ${props.marginBottom}`};
  ${props => props.paddingBottom && css`paddingBottom: ${props.paddingBottom}`};
`

export const FlexRow = styled.View`
  flexDirection: row;
`

export const FlexOne = styled.View`
  flex: 1;
  ${props => props.paddingTop && css`paddingTop: ${props.paddingTop}`};
`

export const FlexRowAndCenter = styled.View`
  ${props => props.marginTop && css`marginTop: ${props.marginTop}`};
  ${props => props.justifyContent && css`justifyContent: ${props.justifyContent}`};
  flexDirection: row;
  alignItems: center;
`

export const PageMainCon = styled.View`
  flex: ${props=>props.flex ? props.flex : 1};
  paddingTop: ${IS_IPHONE_X ? 80 : 60};
  ${props => props.paddingHorizontal && css`paddingHorizontal: ${props.paddingHorizontal}`};

`

export const MainHeaderStyle = styled.View`
  paddingTop: ${IS_IPHONE_X ? 45 : IS_ANDROID ? 15 : 25};
  paddingBottom: 20;
  backgroundColor: ${props=>props.backgroundColor ? props.backgroundColor : 'transparent'};
  ${props => props.backgroundColor && css`paddingBottom: 10`};
  position: absolute;
  width: ${deviceWidth};
  zIndex: 3;
  top: 0;
  borderBottomColor: #D4D4D6;
  borderBottomWidth: 0; 
`

export const PageWidth = styled.View`
  ${props => props.flex && css`flex: ${props.flex}`};
  ${props => props.marginBottom && css`marginBottom: ${props.marginBottom}`};
  paddingHorizontal: 24;
`

export const PageGreyCon = styled.View`
  paddingTop: ${props=>props.paddingTop ? props.paddingTop : 30};
  backgroundColor: ${LIGHT_GREY};
  flex: 1;
`

export const AlignCenter = styled.View`
  alignItems: center;
  ${props => props.marginTop && css`marginTop: ${props.marginTop}`};
  ${props => props.paddingBottom && css`paddingBottom: ${props.paddingBottom}`};
`

export const AlignSelf = styled.View`
  alignSelf: center;
  ${props => props.marginTop && css`marginTop: ${props.marginTop}`};
`

export const Line = styled.View`
  width: 100%;
  borderBottomWidth:1px;
  paddingVertical:10;
`

export const LineImage = styled.Image`
  ${props => props.top && css`top: ${props.top}`};
  position: absolute;
  width: ${deviceWidth};
  left: 0;
`

export const MainImgBg = styled.Image`
  height: ${props=>props.height ? props.height : 30};
	position: absolute;
	top: 0;
	width: ${deviceWidth};
`

export const CustomImage = styled.Image`
  ${props => props.height && css`height: ${props.height}`};
  ${props => props.width && css`width: ${props.width}`};
  ${props => props.opacity && css`opacity: ${props.opacity}`};
  ${props => props.borderRadius && css`borderRadius: ${props.borderRadius}`};
  ${props => props.marginTop && css`marginTop: ${props.marginTop}`};
  ${props => props.marginBottom && css`marginBottom: ${props.marginBottom}`};
  ${props => props.marginRight && css`marginRight: ${props.marginRight}`};
  ${props => props.position && css`position: ${props.position}`};
  ${props => props.tintColor && css`tintColor: ${props.tintColor}`};
  resizeMode: ${props => props.resizeMode ? props.resizeMode : 'contain'};
  zIndex: 2;
`

export const LogoImage = styled.Image`
  resizeMode: ${props => props.resizeMode ? props.resizeMode : 'contain'};
  width: ${props=>props.width ? props.width : 120};
  marginTop: ${props=>props.marginTop ? props.marginTop : 50};
  marginLeft: ${props=>props.marginLeft ? props.marginLeft : 20};
  zIndex: 2;
`