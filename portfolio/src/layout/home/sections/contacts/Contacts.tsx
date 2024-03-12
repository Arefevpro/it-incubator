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
        <MessageWrapper>
        <TitleWrapper>
          <Hashtag name="#" />
          <SectionTitle title="contacts" />
        </TitleWrapper>
        <Message>
        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
        </Message>
        </MessageWrapper>
       
        <ContactsWrapper>
        <ContactsTitle>
        Message me here
        </ContactsTitle>
      </ContactsWrapper>
      </SectionWrapper>
    </Container>
  );
};



const SectionWrapper = styled.div`
  display: flex;
  gap: 45px;
  width: 100%;
  padding-bottom: 145px;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 45px;
`;


const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 317px;
  span {
    font-size: 32px;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.accentGreen};
    margin-left: 16px;
  }
`;

const Message = styled.p`
  
`

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