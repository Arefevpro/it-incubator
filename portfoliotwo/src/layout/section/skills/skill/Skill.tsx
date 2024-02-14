import React from 'react';
import styled from "styled-components"
import { Icon } from '../../../../components/icon/Icon';

type SkillPropsType = {
  iconId?: string;
  title?: string;
  description?: string;
}


export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId} />
        <SkillTitle>{props.title}</SkillTitle>
        <SkillText>{props.description}
      </SkillText>
    </StyledSkill>
  );
};
const StyledSkill = styled.div`
  background-color: #a6c9cc;
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
`

const SkillTitle = styled.h3`
  background-color: #a6c9cc;
`
const SkillText = styled.p`
  background-color: #a6c9cc;
`