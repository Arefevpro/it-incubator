import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';

type PropsCardtype = {
  name: string;
  description: string;
};



export const SkillCard = ( { name, description }: PropsCardtype) => {
  return (
    <CardWrapper>
      <CardTitle>{name}</CardTitle>
      <CardText>{description}</CardText>
    </CardWrapper>
  );
};


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 178px;
  outline: 1px solid ${theme.colors.colorGray};
`;

const CardTitle = styled.h3`
  padding: 8px;
  color: ${theme.colors.accentWhite};
  border-bottom: 1px solid ${theme.colors.colorGray};
`;

const CardText = styled.p`
  padding: 7px;
`