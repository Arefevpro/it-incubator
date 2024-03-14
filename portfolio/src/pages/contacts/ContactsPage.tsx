import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/header/Header';
import { Media } from '../../components/media/Media';
import { Footer } from '../../components/footer/Footer';
import { PageTitle } from '../../components/pageTitle/PageTitle';
import { SectionTitle } from '../../components/textComponents/SectionTitle';
import { Container } from '../../components/slider/Container';
import { theme } from '../../styles/Theme'; 
import { MediaBox } from '../../components/media/MediaBox';

export const ContactsPage = () => {
  return (
    <div>
      <Header />
      <PageTitle name="contacts" description="Who am i?" />
      <Container>
        <ContactWrapper>
          <Message>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </Message>
          <MediaBox />
        </ContactWrapper>
      </Container>
      <Media />
      <Footer />
    </div>
  );
};


const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  padding-top: 60px;
  padding-bottom: 60px;
`;



const Message = styled.p`
  line-height: 26px;
  width: 500px;
`;
