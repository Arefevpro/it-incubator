import './App.css';
import styled from 'styled-components';
import { Header } from './components/header/Header';
import { MainSection } from './pages/home/main/Main';
import { QuoteSection } from './components/quote/Quote';
import { Projects } from "./pages/home/projects/Projects";
import { Media } from './components/media/Media';
import { Skills } from './pages/home/skills/Skills';
import { AboutMe } from './pages/home/aboutme/AboutMe';
import { Contacts } from './pages/home/contacts/Contacts';
import { Footer } from './components/footer/Footer';
import { SmallProjects } from './pages/projects/SmallProjects'
import { PageTitle } from './components/pageTitle/PageTitle';
import { SkillsAboutPage } from './pages/projects/SkillsAboutPage';
import { MyFunFacts } from './pages/about/MyFunFacts';
import { ContactsPage } from './pages/contacts/ContactsPage';
import { CompletApps } from './components/CompletApps';


function App() {
    return (
      <div className="App">
        {/* <HomePage>
          <Header />
          <Media />
          <MainSection />
          <QuoteSection />
          <Projects />
          <Skills />
          <AboutMe />
          <Contacts />
          <Footer />
        </HomePage>
        <ProjectsPage>
        <Header />
          <PageTitle name="projects" description="List of my projects" />
        <CompletApps />
          <Media />
        <SmallProjects />
        <Footer />
        </ProjectsPage>
        <AboutPage>
          <Header />
          <PageTitle name="about-me" description="Who am i?" />
          <AboutMe isShowTitle={false} button={false}/>
          <Media />
          <SkillsAboutPage />
          <MyFunFacts />
          <Footer />
        </AboutPage>
        <ContactsPage /> */}


<Appo>
<Header>Header</Header>
<Aside>Aside</Aside>
<Main>
<Wrapper>
  <Box>Box</Box>
</Wrapper>
<Content>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
</Content>
</Main>
</Appo>

      </div>
    );
}


const Appo = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: 60px 1fr;
  grid-template-areas:
    "header header"
    "aside main";
  height: 100vh;


`

const Header = styled.header`
  
  
`

const Aside = styled.aside`
  grid-area: aside;
  background-color: #000;
  color: #fff;
`


const Main = styled.main`
  grid-area: main;
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
` 

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: #fff;
  color: #000;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  line-height: 200px;
  border-radius: 20px;
  margin-bottom: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`





















const HomePage = styled.div`

`


const AboutPage = styled.div`

`

const ProjectsPage = styled.div`

`








export default App;





  // const Section = ({children}: { children: ReactNode}) => {
  //   return (
  //     <div>

  //       {children}
  //     </div>
  //   );
  // }

  // const ParentComponent = () => {
  //   return (
  //     <div>
  //       <Section>
  //         <PageTitle name="projects" description="List of my projects" />
  //         <Media />
  //       </Section>
  //     </div>
  //   );
  // }