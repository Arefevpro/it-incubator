import React from "react";
import styled from 'styled-components';
import { Icon } from "../icon/Icon";


export const Logo = () => {
  return (
    <LogoName href=" ">
      <Icon iconId={"logoUnion"} />
      Elias
    </LogoName>
  );
};

const LogoName = styled.a`
  
`