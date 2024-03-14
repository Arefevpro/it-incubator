import React from 'react';
import styled from 'styled-components';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/slider/Container';
import { SectionTitle } from '../../components/textComponents/SectionTitle';
import { Hashtag } from '../../components/hashtag/Hashtag';


export const SkillsAboutPage = () => {
  return (
    <Container>
      <Hashtag name="#"/>
      <SectionTitle title="skills" />
    </Container>
  );
};

