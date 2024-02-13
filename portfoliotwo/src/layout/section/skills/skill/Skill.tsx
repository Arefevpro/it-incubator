import React from 'react';
import styled from "styled-components"
import { Icon } from '../../../../components/icon/Icon';


export const Skills = () => {
  return (
    <StyledSkill>
          <Icon iconId={'reactSvg'} />
          <SkillTitle>html5</SkillTitle>
          <SkillText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
          </SkillText>
        </StyledSkill>
  );
};

const StyledSkill = styled.div`
  background-color: #3d9ea3;
`

const SkillTitle = styled.h3`
  background-color: #3d9ea3;
`
const SkillText = styled.p`
  background-color: #3d9ea3;
`