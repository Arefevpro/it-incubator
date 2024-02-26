import styled from "styled-components"


export const SectionTitle = styled.h2`
  text-align: center;
  font-family: 'Josefin Sans', sans-serif;
  font-size: 36px;
  font-weight: 600;
  letter-spacing: 5px;

  &::before {
    content: '';
    display: inline-block;
    width: 55px;
    height: 1px;
    background: ${props => props.theme.colors.accent};
  }


`;
