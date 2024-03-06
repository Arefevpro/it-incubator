import styled from 'styled-components';
import { FlexWrapper } from '../../components/flex/FlexWrapper';
import { theme } from '../../styles/Theme';
import { Container } from '../../components/slider/Container';


export const QuoteSection = ( ) => {
  return (
    
      <Container>
        <StyledQuoteSection>
      <FlexWrapper direction="column" align="center">
        <Quote>With great power comes great electricity bill</Quote>
        <Quote>- Dr. Who</Quote>
      </FlexWrapper>
      </StyledQuoteSection>
      </Container>
      
    
  );
};


const StyledQuoteSection = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;


const Quote = styled.p`
padding: 32px;
  font-size: 24px;
  color: ${theme.colors.accentWhite};
  border: 1px solid ${theme.colors.accentGreen};
`