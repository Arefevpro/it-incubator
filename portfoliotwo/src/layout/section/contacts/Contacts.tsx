import React from 'react';
import styled from 'styled-components';
import { SectionTitle } from '../../../components/SectionTitle';

export const Contact = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <Field placeholder={"Name"}/>
        <Field placeholder={"Subject"}/>
        <Field placeholder={"Message"} as={"textarea"}/>
      </StyledForm>
    </StyledContacts>
  );
};

const StyledContacts = styled.section `
  min-height: 40vh;
  background-color: #a6c9cc;
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StyledForm = styled.form `
  max-width: 100%;
  width: 40%;
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const Field = styled.input `
  box-sizing: border-box;
  border: #ed0ce2 2px solid;
  background-color: #a6c9cc;
  width: 80%;
  margin: 10px;
  padding: 10px;
`
