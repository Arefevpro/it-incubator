import React from 'react';
import styled from 'styled-components';
import { Icon } from '../icon/Icon';
import { theme } from '../../styles/Theme';

export const Media = () => {
  return (
    <div>
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
    </div>
  );
};



const MediaList = styled.ul`
  width: 32px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
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

  &:hover {
    color: ${theme.colors.accentWhite};
  }
  `