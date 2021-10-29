import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'
import Header from './components/Header/Header';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import ReachoutForm from './components/ReachoutForm/ReachoutForm';
import TimeLine from './components/Timeline/Timeline';
import Footer from './components/Footer/Footer';
import { HEADER_DATA, TIMELINE_DATA, TECHNOLOGIES } from './Data';

function App() {
  return (
    <div className="App main-banner">
      <Container fluid className="mainContainer">
        <Row>
          <Header varient={HEADER_DATA.varient} title={HEADER_DATA.title} links={HEADER_DATA.links} />
        </Row>
        <Row id="intro" className="align-items-center bg-intro full-height">
          <PersonalDetails />
        </Row>
        <Row id="projects" className="bg-projects align-items-center full-height">
          <Projects />
        </Row>
        <Row id="skills" className="bg-skills align-items-center full-height text-dark">
          <Skills />
        </Row>
        {
          TIMELINE_DATA.length > 0 &&
          <Row id="experience" className="bg-projects">
            <TimeLine sectionTitle="Work Experience / Education" timelineData={TIMELINE_DATA} />
          </Row>
        }
        <Row id="reachout" className="bg-reachout full-height align-items-center justify-content-center" >
          <ReachoutForm />
        </Row>
        {TECHNOLOGIES.length > 0 && <Row className="footer-styles align-self-end">
          <Footer title="Built With" technologies={TECHNOLOGIES} />
        </Row>}
      </Container>
    </div>
  );
}

export default App;
