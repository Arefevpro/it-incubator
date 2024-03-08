import React from 'react';
import styled from 'styled-components';


export const Card = () => {

  debugger;

  return (
    <CardWrapper>
      <ImageWrapper>
      <img src="https://avatars.mds.yandex.net/i?id=ba56bc3e6fae2c11d221459d723b87afb4281c96-9866669-images-thumbs&n=13" alt="" />
      </ImageWrapper>
 <SkillsWrapper>

 </SkillsWrapper>
      <Description>
        <DescriptionTitle>Name</DescriptionTitle>
        <DescriptionText>Text description</DescriptionText>
        <ButtonWrapper>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonWrapper>
      </Description>
    </CardWrapper>
  );
};



