import React from 'react';
import styled from 'styled-components';


export const Post = (props) => {

  debugger;

  return (
    <Box>
      <img src="https://avatars.mds.yandex.net/i?id=ba56bc3e6fae2c11d221459d723b87afb4281c96-9866669-images-thumbs&n=13" alt="" />
      <div>
        <span>Like</span>
      </div>
    </Box>
  );
};



const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 50px;
    height: 50px;
  }
`

