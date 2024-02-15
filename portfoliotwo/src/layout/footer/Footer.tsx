import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../src/components/icon/Icon';
import { FlexWrapper } from '../../../src/components/Flexwrapper';


export const Footer = () => {
  return (
    <StyledFooter>
      <Name>Svetlana</Name>
      <FlexWrapper>
      <SocialList>
        <SocialItem>
          <SocialLink>
            <Icon  iconId={'instagramSvg'}/>
          </SocialLink>
          <SocialItem>
          <SocialLink>
            <Icon  iconId={'telegramSvg'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon  iconId={'vkSvg'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon  iconId={'linkedinSvg'}/>
          </SocialLink>
        </SocialItem>
        </SocialItem>
      </SocialList>
      </FlexWrapper>
      <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #a6c9cc;
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  min-height: 40vh;
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
