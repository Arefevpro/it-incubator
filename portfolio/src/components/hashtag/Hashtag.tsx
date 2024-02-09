import styled from 'styled-components';

type HashtagDecorPropsType = {
  fontSize?: string;
  color?: string;
  margin?: string;
  padding?: string;
}


export const HashtagDecor = styled.div<HashtagDecorPropsType>`
  font-size: ${props => props.fontSize || "16px"};
  color: ${props => props.color || "#C778DD"};
  margin: ${props => props.margin || "0"};
  padding: ${props => props.padding || "0"};
`