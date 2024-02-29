import React from 'react';
import styled from "styled-components"
import { Link } from '../../../../components/Link';
import { theme } from '../../../../styles/Theme';
import { Button } from '../../../../components/Button';


type WorkPropstype = {
  title: string
  text: string
  src: string
}


export const Work = ( props: WorkPropstype ) => {
  return (
    <StyledWork>
      <ImageWrapper>
        <Image src={props.src} alt=" " />
        <Button>view project</Button>
      </ImageWrapper>

      <Description>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <Link href={"#"}>demo</Link>
        <Link href={"#"}>kode</Link>
      </Description>
    </StyledWork>
  );
};

const StyledWork = styled.div`
max-width: 540px;
width: 100%;
background-color: ${theme.colors.secondaryBg};

${Link} {
  padding: 10px 0;

  & + ${Link} {
  margin-left: 20px;
}
}
`

const ImageWrapper = styled.div`
  position: relative;

  &:hover {
    &::before {
      content: "";
      display: inline-block;
      position: absolute;
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(4px);
    }

    ${Button} {
      opacity: 1;    // показываем кнопку
    }
  }

  ${Button} {
    opacity: 0;                          // прячем кнопку
    position: absolute;
    top: 50%;
    left: 50%;                          // для выравнивания по центру
    transform: translate(-50%, -50%);  // для выравнивания по центру

    &::before {
      content: "";
      width: 100%;
      height: 100%;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;

`
const Description = styled.div`
padding: 25px 20px;
`

const Title = styled.h3`
`

const Text = styled.p`
margin: 14px 0 10px;
`

