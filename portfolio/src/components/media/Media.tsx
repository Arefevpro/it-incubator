import React from 'react';
import styled from 'styled-components';

export const Media = () => {
  return (
    <div>
      <MediaList>
        <MediaItem>
          <MedialLink></MedialLink>
        </MediaItem>
        <MediaItem>
          <MedialLink></MedialLink>
        </MediaItem>
        <MediaItem>
          <MedialLink></MedialLink>
        </MediaItem>
      </MediaList>
    </div>
  );
};



const MediaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `

  const MediaItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  `

  const MedialLink = styled.a`
    

  `