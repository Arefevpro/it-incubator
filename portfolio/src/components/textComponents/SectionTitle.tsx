import styled from 'styled-components';




type SectionTitlePropsType = {
  size?: string;
  color?: string;
 }

 export const SectionTitle = styled.div<SectionTitlePropsType>`
 font-size: ${props => props.size || "32px"};
 color: ${props => props.color || "#FFFFFF"};
`