import React from "react";
import iconsSprite from "../../assets/icons-sprite.svg";


type IconPropsType = {
  iconId: string;
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"> 
    <use xlinkHref={ `${ iconsSprite }#${props.iconId}` }/> 
    </svg>
  );
};