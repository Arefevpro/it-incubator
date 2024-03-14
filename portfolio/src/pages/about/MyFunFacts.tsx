import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/slider/Container';
import { SectionTitle } from '../../components/textComponents/SectionTitle';
import { theme } from '../../styles/Theme';

export const MyFunFacts = () => {
  return (
    <Container>
      <SectionTitle title="my-fun-facts" />
      <FactsSectionWrapper>
        <FactsWrapper>
          <FactsItem>I like winter more than summer</FactsItem>
          <FactsItem>I often bike with my friends</FactsItem>
          <FactsItem>I like pizza and pasta</FactsItem>
          <FactsItem>I was in Egypt, Poland and Turkey</FactsItem>
          <FactsItem>My favorite movie is The Green Mile</FactsItem>
          <FactsItem>I am still in school</FactsItem>
          <FactsItem>I don’t have any siblings</FactsItem>
        </FactsWrapper>
        <DecoreWraper></DecoreWraper>
      </FactsSectionWrapper>
    </Container>
  );
};


const FactsSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 939px;
`;

const FactsWrapper = styled.div`
  display: flex;
  width: 605px;
`;

const FactsItem = styled.p`
  padding-top: 8px;
  outline: 1px solid ${theme.colors.colorGray};
`;


const DecoreWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 `