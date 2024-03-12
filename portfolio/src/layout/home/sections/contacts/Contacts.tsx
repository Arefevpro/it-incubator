import React from 'react';
import styled from 'styled-components';
import { theme } from '../../../../styles/Theme';
import { Container } from '../../../../components/slider/Container';
import { SectionTitle } from '../../../../components/textComponents/SectionTitle';
import { Hashtag } from '../../../../components/hashtag/Hashtag';





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
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </Message>
        </MessageWrapper>
        <ContactsWrapper>
          <ContactsTitle>Message me here</ContactsTitle>
          <IconWrapper>
            
          </IconWrapper>
        </ContactsWrapper>
      </SectionWrapper>
    </Container>
  );
};



const SectionWrapper = styled.div`
  display: flex;
  gap: 314px;
  width: 100%;
  padding-bottom: 145px;
`;

const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 505px;
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
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 204px;
  height: 140px;
  outline: 1px solid ${theme.colors.colorGray};
  margin-top: 87px;
`;

const ContactsTitle = styled.p`
  display: inline-block;
  justify-content: center;
  font-weight: 600;
  color: ${theme.colors.accentWhite};
`;

const IconWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 172px;
  height: 72px;
  outline: 1px solid ${theme.colors.colorGray};
  `