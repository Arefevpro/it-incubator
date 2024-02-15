import React from 'react';
import styled from 'styled-components';
import { Icon } from '../../../src/components/icon/Icon';
import { FlexWrapper } from '../../../src/components/Flexwrapper';


export const Footer = () => {
  return (
    <StyledFooter>
      <Name>Svetlana</Name>
      <FlexWrapper direction={"column"} alignItems={"center"}>
      <SocialList>
        <SocialItem>
          <SocialLink>
            <Icon height={'21px'}
                  width={'21px'} 
                  viewBox={'0 0 21px 21px'} 
                  iconId={'instagramSvg'}/>
          </SocialLink>
          <SocialItem>
          <SocialLink>
            <Icon iconId={'telegramSvg'}
                  height={'21px'}
                  width={'21px'} 
                  viewBox={'0 0 21px 21px'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon iconId={'vkSvg'}
                  height={'21px'}
                  width={'21px'} 
                  viewBox={'0 0 21px 21px'}/>
          </SocialLink>
        </SocialItem>
        <SocialItem>
          <SocialLink>
            <Icon iconId={'linkedinSvg'}
                  height={'21px'}
                  width={'21px'} 
                  viewBox={'0 0 21px 21px'}/>
          </SocialLink>
        </SocialItem>
        </SocialItem>
      </SocialList>
      <Copyright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copyright>
      </FlexWrapper>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #a6c9cc;
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  min-height: 30vh;
`

const SocialList = styled.ul`
  background-color: #b0a6cc;
  display: flex;
  list-style: none;
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
