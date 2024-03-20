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
<Headerr>Header</Headerr>
<Aside>Aside</Aside>
<Main>
<Wrapper>
  <Box>Box</Box>
  <Box>Box</Box>
  <Box>Box</Box>
  <Box>Box</Box>
</Wrapper>
<Content>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
</Content>
<Content>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
</Content>
<Content>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem fugiat nisi quaerat soluta tenetur blanditiis, nemo ducimus commodi consequuntur animi aliquam aliquid mollitia odit perferendis cupiditate pariatur maxime molestias tempora.
</Content>
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

const Headerr = styled.header`
  background-color: aliceblue;
  grid-area: header;
  border: 2px solid;

`

const Aside = styled.aside`
  grid-area: aside;
  background-color: #000;
  border: 2px solid;
`


const Main = styled.main`
  grid-area: main;
  background-color: #702b2b;
  border: 2px solid;
`

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
  padding: 10px;
  border: 2px solid;
` 

const Box = styled.div`
  background-color: #196225;
  border: 2px solid;
  min-width: 250px;
  min-height: 70px;
`

const Content = styled.p`
  padding: 10px;
  background-color: #19252f;

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