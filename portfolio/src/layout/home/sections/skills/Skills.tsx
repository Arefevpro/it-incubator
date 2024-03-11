import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/textComponents/SectionTitle';
import { Hashtag } from '../../../../components/hashtag/Hashtag';
import { theme } from '../../../../styles/Theme';
import { Container } from '../../../../components/slider/Container';


export const Skills = () => {
  return (
    <Container>
      <SkillsWrapper>
        <DecorWrapper />
        <CardWrapper>

        </CardWrapper>
      </SkillsWrapper>
    </Container>
  );
};


const SkillsWrapper = styled.div`
padding-top: 106px;
  display: flex;
  gap: 59px;
  width: 100%;
  height: 100vh;
`;

const DecorWrapper = styled.div`
  width: 349px;
  height: 282px;
  border: 1px solid ${theme.colors.colorGray};
  `;


const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${theme.colors.colorGray};
`