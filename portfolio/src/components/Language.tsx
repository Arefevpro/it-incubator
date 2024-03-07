import styled from 'styled-components';
import { theme } from '../styles/Theme';
import { Icon } from '../components/icon/Icon'


export const Language = () => {
  return (
    <LanguageBox >
      <LogoName>en</LogoName>
      <Icon iconId={"arrowsDefault"}
             width='25px'
             height='15px'/>
    </LanguageBox>
  );
};

const LanguageBox = styled.div`
  display: flex;
  align-items: end;
`;


const LogoName = styled.span`
  display: inline-block;
  font-weight: 600;
  color: ${theme.colors.colorGray};
  text-transform: uppercase;
`;



