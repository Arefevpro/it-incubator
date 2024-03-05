import styled from 'styled-components';
import { theme } from '../styles/Theme';
import { Icon } from '../components/icon/Icon'


export const Language = () => {
  return (
    <LanguageBox >
      <LogoName>en</LogoName>
      <Icon iconId={"arrowsDefault"} width='25' height='15'/>
    </LanguageBox>
  );
};

const LogoName = styled.span`
display: inline-block;
  font-weight: 600;
  color: ${theme.colors.colorGray};
  text-transform: uppercase;
`

const LanguageBox = styled.div`
`;

