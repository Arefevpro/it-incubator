import React from 'react';
import styled from "styled-components"


export const Slider = () => {
  return (
    <StyledSlider>
      <Slide>
        <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </Text>
        <Name>@ivan ivanow</Name>
      </Slide>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
  max-width: 500px;
`

const Slide = styled.div`
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
  text-align: center;
`

const Text = styled.p`
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
`

const Name = styled.span`
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
`