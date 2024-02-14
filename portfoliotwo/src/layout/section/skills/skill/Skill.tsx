import React from 'react';
import styled from "styled-components"
import { Icon } from '../../../../components/icon/Icon';

type SkillPropsType = {
  iconId?: string;
  title?: string;
  width?: string;
  height?: string;
  viewBox?: string;
}


export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
      </SkillText>
    </StyledSkill>
  );
};
const StyledSkill = styled.div`
  background-color: #a6c9cc;
`

const SkillTitle = styled.h3`
  background-color: #a6c9cc;
`
const SkillText = styled.p`
  background-color: #a6c9cc;
`