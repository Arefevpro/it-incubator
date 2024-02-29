import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';
import { Button } from '../../../components/Button';
import { Container } from '../../../components/slider/Container';

export const Contact = () => {
  return (
    <StyledContacts>
      <Container>
        <SectionTitle>Contact</SectionTitle>
        <StyledForm>
          <Field placeholder={"Name"} />
          <Field placeholder={"Subject"} />
          <Field placeholder={"Message"} as={"textarea"} />
          <Button type={"submit"}>Send message</Button>
        </StyledForm>
      </Container>
    </StyledContacts>
  );
};

const StyledContacts = styled.section `

`
const StyledForm = styled.form `
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
`

const Field = styled.input `

`
