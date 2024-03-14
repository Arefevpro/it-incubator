import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';

export const MediaBox = () => {
  return (
    <ContactBox>
            <MediaList>
    <MediaItem>
      <MedialLink>
        <Icon
          iconId={"github"}
          width={"32px"}
          height={"32px"}
          viewbox={"0 0 32 32"}
        />
        <ContactName>!Elias#3519</ContactName>
      </MedialLink>
    </MediaItem>
    <MediaItem>
      <MedialLink>
        <Icon
          iconId={"dribble"}
          width={"32px"}
          height={"32px"}
          viewbox={"0 0 32 32"}
        />
        <ContactName>elias@elias.me</ContactName>
      </MedialLink>
    </MediaItem>
  </MediaList>
    </ContactBox>
   
  );
};



const MediaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  `

  const MediaItem = styled.li`
  display: flex;
  align-items: center;
  `

  const MedialLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  `

  const ContactName = styled.p`
  display: inline-block;
  font-weight: 600;
  color: ${theme.colors.colorGray};
  `

const ContactBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 16px;
width: 100%;
`;