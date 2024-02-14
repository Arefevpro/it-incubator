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
`

const Slide = styled.div`
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
`

const Text = styled.div`
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
`

const Name = styled.div`
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
`