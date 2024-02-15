import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../src/components/icon/Icon';

export const Footer = () => {
  return (
    <StyledFooter>
      <Name>Svetlana</Name>
      <SocialIconsList>
        <SocialIconLink>
          <Icon  iconId={'codeSvg'}/>
        </SocialIconLink>
      </SocialIconsList>
      <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #a6c9cc;
`

const SocialIconsList = styled.ul`
  background-color: #a6c9cc;
`

const SocialIconLink = styled.a`
  background-color: #a6c9cc;
`

const Name = styled.span`
  background-color: #a6c9cc;
`

const Copyright = styled.span`
  background-color: #a6c9cc;
`
