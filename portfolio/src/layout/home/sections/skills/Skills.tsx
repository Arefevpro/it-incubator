import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../../components/textComponents/SectionTitle';
import { Hashtag } from '../../../../components/hashtag/Hashtag';
import { theme } from '../../../../styles/Theme';
import { Container } from '../../../../components/slider/Container';


export const Skills = () => {
  return (
    <SkillsWrapper>
      <Container>

      </Container>
    </SkillsWrapper>
  );
};


const SkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid ${theme.colors.colorGray};
`;