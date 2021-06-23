import styled, {css} from 'styled-components'

export const TextStyle = styled.Text`
  ${props => props.txtMarginLeft && css`marginLeft: ${props.txtMarginLeft}`};
  ${props => props.txtMarginRight && css`marginRight: ${props.txtMarginRight}`};
  ${props => props.txtMarginBottom && css`marginBottom: ${props.txtMarginBottom}`};
  ${props => props.txtMarginTop && css`marginTop: ${props.txtMarginTop}`};
  ${props => props.txtPaddingTop && css`paddingTop: ${props.txtPaddingTop}`};
  ${props => props.txtPaddingLeft && css`paddingLeft: ${props.txtPaddingLeft}`};
  ${props => props.txtPaddingRight && css`paddingRight: ${props.txtPaddingRight}`};
  ${props => props.txtPosition && css`position: ${props.txtPosition}`};
  ${props => props.txtBottom && css`bottom: ${props.txtBottom}`};
  ${props => props.opacity && css`opacity: ${props.opacity}`};
  color: ${props => props.txtColor || '#FFFFFF'};
  fontSize: ${props => props.txtFontSize || 18};
  ${props => props.txtFontFamily && css`fontFamily: ${props.txtFontFamily}`};
  ${props => props.txtAllignment && css`textAlign: ${props.txtAllignment}`};
  ${props => props.txtWidth && css`width: ${props.txtWidth}`};
  ${props => props.txtHeight && css`height: ${props.txtHeight}`};
  ${props => props.txtLineHeight && css`lineHeight: ${props.txtLineHeight}`};
  ${props => props.txtFlex && css`flex: ${props.txtFlex}`};
  ${props => props.txtTextDecorationLine && css`textDecorationLine: ${props.txtTextDecorationLine}`};
  ${props => props.textDecorationColor && css`textDecorationColor: ${props.textDecorationColor}`};
  ${props => props.zIndex && css`zIndex: ${props.zIndex}`};
  ${props => props.fontWeight && css`fontWeight: ${props.fontWeight}`};
  ${props => props.backgroundColor && css`backgroundColor: ${props.backgroundColor}`};
  ${props => props.marginVertical && css`marginVertical: ${props.marginVertical}`};
`