import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { Container } from '../../../../components/slider/Container';
import { SectionTitle } from '../../../../components/textComponents/SectionTitle';
import { Hashtag } from '../../../../components/hashtag/Hashtag';
import { Button } from '../../../../components/Button';





export const Contacts = () => {
  return (
    <Container>
      <SectionWrapper>
        <TitleWrapper>
          <SectionTitle title="contacts" />
        </TitleWrapper>
        <Message>
        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
        </Message>
      </SectionWrapper>
      <ContactsWrapper>
        <ContactsTitle>
        Message me here
        </ContactsTitle>
      </ContactsWrapper>
    </Container>
  );
};


const ContactsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;


const ContactsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 32px;
  color: ${theme.colors.accentWhite};
`;

const Message = styled.p`
  
`

const SectionWrapper = styled.div`
  padding-top: 106px;
  padding-bottom: 112px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 390px;
`;