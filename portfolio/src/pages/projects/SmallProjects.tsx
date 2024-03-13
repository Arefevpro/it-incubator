import React from 'react';
import styled from 'styled-components';
import { Container } from '../../components/slider/Container';
import { SectionTitle } from '../../components/textComponents/SectionTitle';
import { Hashtag } from '../../components/hashtag/Hashtag';
import { theme } from '../../styles/Theme';
import { SkillCard } from '../../components/skillsCard/SkillCard';


export const SmallProjects = () => {
  return (
    <Container>
      <SkillsWrapper>
        <TitleWrapper>
          <Hashtag name="#" />
          <SectionTitle title="skills" />
        </TitleWrapper>
        <BoxWrapper>
          <CardWrapper>
            <SkillCard
              name="Languages"
              description="TypeScript Lua Python JavaScript"
            />
            <SkillCard 
              name="Databases" 
              description="SQLite PostgreSQL Mongo" />
            <SkillCard
              width={196}
              name="Tools"
              description="VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"
            />
            <SkillCard
              name="Other"
              description="HTML CSS EJS SCSS REST Jinja"
            />
            <SkillCard
              width={196}
              name="Frameworks"
              description="React Vue Disnake Discord.js Flask Express.js"
            />
          </CardWrapper>
        </BoxWrapper>
      </SkillsWrapper>
    </Container>
  );
};


const SkillsWrapper = styled.div`
  padding-top: 106px;
  padding-bottom: 112px;
  display: flex;
  flex-direction: column;
  gap: 12x;
  width: 100%;
  height: 100%;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 390px;
  span {
    font-size: 32px;
  }

  &::after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.accentGreen};
    margin-top: 8px;
    margin-left: 16px;
  }
`;

const BoxWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 58px;
  width: 100%;
  height: 100%;
  `


const CardWrapper = styled.div`
padding-top: 43px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: flex-start;
  align-content: flex-start;
  gap: 16px;
  width: 584px;
`

