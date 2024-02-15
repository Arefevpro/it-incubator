import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../src/components/icon/Icon';

export const Footer = () => {
  return (
    <StyledFooter>
      <Name>Svetlana</Name>
      <SocialList>
        <SocialItem>
          <SocialLink>
            <Icon  iconId={'instagram'}/>
          </SocialLink>
          <SocialItem>
          <SocialLink>
            <Icon  iconId={'telegram'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon  iconId={'vk'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon  iconId={'linkedin'}/>
          </SocialLink>
        </SocialItem>
        </SocialItem>
      </SocialList>
      <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #a6c9cc;
`

const SocialList = styled.ul`
  background-color: #a6c9cc;
`

const SocialItem = styled.li`
  background-color: #a6c9cc;
`

const SocialLink = styled.a`
  background-color: #a6c9cc;
`

const Name = styled.span`
  background-color: #a6c9cc;
`

const Copyright = styled.small`
  background-color: #a6c9cc;
`
