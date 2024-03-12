import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/slider/Container';
import { SectionTitle } from '../../components/textComponents/SectionTitle';
import { Hashtag } from '../../components/hashtag/Hashtag';
import { Logo } from '../../components/logo/Logo';
import { Icon } from '../../components/icon/Icon';




export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
      
        <SignatureWrapper>
        <LogoWrapper>
        <Logo />
          <Email>
            elias@elias-dev.ml
          </Email>
        </LogoWrapper>
        <Signature>
        Web designer and front-end developer
        </Signature>
        </SignatureWrapper>
        
        <StyledMedia>
      <MediaList>
        <MediaItem>
          <MedialLink>
            <Icon iconId={"github"} 
                  width={'32px'} 
                  height={'32px'}
                  viewbox={'0 0 32 32'}/>
          </MedialLink>
        </MediaItem>
        <MediaItem>
          <MedialLink>
          <Icon iconId={"dribble"} 
                  width={'32px'} 
                  height={'32px'}
                  viewbox={'0 0 32 32'}/>
          </MedialLink>
        </MediaItem>
        <MediaItem>
          <MedialLink>
          <Icon iconId={"figma"} 
                  width={'32px'} 
                  height={'32px'}
                  viewbox={'0 0 32 32'}/>
          </MedialLink>
        </MediaItem>
      </MediaList>
    </StyledMedia>
      </Container>
    </StyledFooter>
  );
};


const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 32px 0 8px;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
  color: ${theme.colors.colorGray};
  `

  const SignatureWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  `

  const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  `

  const Email = styled.p`
  font-size: 16px;
  `

  const Signature = styled.p`
  font-size: 16px;
  `

  const StyledMedia = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  `

const MediaList = styled.ul`
  width: 32px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  align-items: center;
  `

  const MediaItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  `

  const MedialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  `