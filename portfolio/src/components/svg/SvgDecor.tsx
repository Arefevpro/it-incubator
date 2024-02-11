import React from "react";
import styled from 'styled-components';



// Декоративные точки

type DotsDecorPropsType = {
 size?:string
}
export const DotsDecor = ({size}: DotsDecorPropsType) => {
  return (
    <svg width={size || "63"} height={size || "63"} viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
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
</svg>
  );
};


//  Декоративный логотип

type LogoDecorPropsType = {
  size?: string;
 }
export const LogoDecor = ({size}: LogoDecorPropsType) => {
  return (
    <svg width={size || "63"} height={size || "63"} viewBox="0 0 63 63" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_1103_3419" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0 14H13H26V27H13V40H26V53H13H0V40V27V14Z"/>
</mask>
<path d="M0 14V13H-1V14H0ZM26 14H27V13H26V14ZM26 27V28H27V27H26ZM13 27V26H12V27H13ZM13 40H12V41H13V40ZM26 40H27V39H26V40ZM26 53V54H27V53H26ZM0 53H-1V54H0V53ZM13 13H0V15H13V13ZM26 13H13V15H26V13ZM27 27V14H25V27H27ZM13 28H26V26H13V28ZM14 40V27H12V40H14ZM13 41H26V39H13V41ZM25 40V53H27V40H25ZM26 52H13V54H26V52ZM0 54H13V52H0V54ZM-1 40V53H1V40H-1ZM-1 27V40H1V27H-1ZM-1 14V27H1V14H-1Z" fill="#C778DD" mask="url(#path-1-inside-1_1103_3419)"/>
<mask id="path-3-outside-2_1103_3419" maskUnits="userSpaceOnUse" x="25" y="0" width="28" height="41" fill="black">
<rect fill="white" x="25" width="28" height="41"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M26 1H39H52V14V27V40H39H26V27H39V14H26V1Z"/>
</mask>
<path d="M26 1V0H25V1H26ZM52 1H53V0H52V1ZM52 40V41H53V40H52ZM26 40H25V41H26V40ZM26 27V26H25V27H26ZM39 27V28H40V27H39ZM39 14H40V13H39V14ZM26 14H25V15H26V14ZM39 0H26V2H39V0ZM52 0H39V2H52V0ZM53 14V1H51V14H53ZM53 27V14H51V27H53ZM53 40V27H51V40H53ZM39 41H52V39H39V41ZM39 39H26V41H39V39ZM27 40V27H25V40H27ZM26 28H39V26H26V28ZM38 14V27H40V14H38ZM26 15H39V13H26V15ZM25 1V14H27V1H25Z" fill="#C778DD" mask="url(#path-3-outside-2_1103_3419)"/>
</svg>
  );
};


// Декоративный куб

type CubeDecorPropsType = {
  size?:string
 }
export const СubeDecor = ({size}: CubeDecorPropsType) =>  {
  return (
    <svg width={size || "86"} height={size || "86"} viewBox="0 0 86 86">
    <rect x="0.5" y="0.5" width="85" height="85"
      fill="transparent" stroke="#ABB2BF" stroke-width="1"
    />
  </svg>
  );
};



type LineDecorPropsType = {
  size?:string
 }

export const LineDecor = ({size}: LineDecorPropsType) =>  {
  return (
    <svg width={size || "86"} height={size || "86"} viewBox="0 0 86 86">
    <rect x="0.5" y="0.5" width="85" height="85" stroke="#ABB2BF" stroke-width="1"
    />
  </svg>
  );
};





