import React from "react";
import styled from 'styled-components';



// Декоративные точки

type DotsDecorPropsType = {
  padding?: string;
  margin?: string;
  width?: string;
  height?: string;
  border?: string;
}
export const DotsDecor = () => {
  return (
    <IconStyled width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="2" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="16.75" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="31.5" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="46.25" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="61" cy="2" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="16.75" r="2" fill="#ABB2BF"/>
<circle cx="16.75" cy="16.75" r="2" fill="#ABB2BF"/>
<circle cx="31.5" cy="16.75" r="2" fill="#ABB2BF"/>
<circle cx="46.25" cy="16.75" r="2" fill="#ABB2BF"/>
<circle cx="61" cy="16.75" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="31.5" r="2" fill="#ABB2BF"/>
<circle cx="16.75" cy="31.5" r="2" fill="#ABB2BF"/>
<circle cx="31.5" cy="31.5" r="2" fill="#ABB2BF"/>
<circle cx="46.25" cy="31.5" r="2" fill="#ABB2BF"/>
<circle cx="61" cy="31.5" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="46.25" r="2" fill="#ABB2BF"/>
<circle cx="16.75" cy="46.25" r="2" fill="#ABB2BF"/>
<circle cx="31.5" cy="46.25" r="2" fill="#ABB2BF"/>
<circle cx="46.25" cy="46.25" r="2" fill="#ABB2BF"/>
<circle cx="61" cy="46.25" r="2" fill="#ABB2BF"/>
<circle cx="2" cy="61" r="2" fill="#ABB2BF"/>
<circle cx="16.75" cy="61" r="2" fill="#ABB2BF"/>
<circle cx="31.5" cy="61" r="2" fill="#ABB2BF"/>
<circle cx="46.25" cy="61" r="2" fill="#ABB2BF"/>
<circle cx="61" cy="61" r="2" fill="#ABB2BF"/>
</IconStyled>
  )
}

const IconStyled = styled.svg`
  width: 63px;        
  height: 63px;
`


//  Декоративный логотип
export const LogoDecor = () => {
  return (
    <LogoStyled width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z" fill="white"/>
</LogoStyled>
  )
}

const LogoStyled = styled.svg`
  width: 63px;        
  height: 63px;
`


// Декоративный куб

export const СubeDecor = () => {
  return (
    <CubeStyled width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z" fill="white"/>
</CubeStyled>
  )
}

const CubeStyled = styled.svg`
  width: 63px;        
  height: 63px;
`