import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/slider/Container';
import { SectionTitle } from '../../components/textComponents/SectionTitle';

export const MyFunFacts = () => {
  return (
    <Container>
      <SectionTitle title="my-fun-facts" />
      <FactsSectionWrapper>
        <FactsWrapper>
          <FactsItem></FactsItem>
          <FactsItem></FactsItem>
          <FactsItem></FactsItem>
          <FactsItem></FactsItem>
          <FactsItem></FactsItem>
          <FactsItem></FactsItem>
          <FactsItem></FactsItem>
        </FactsWrapper>
        <DecoreWraper></DecoreWraper>
      </FactsSectionWrapper>
    </Container>
  );
};


const FactsSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FactsItem = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;


const DecoreWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 `