import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'
import Header from './components/Header/Header';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';
import ReachoutForm from './components/ReachoutForm/ReachoutForm';

function App() {
  return (
    <div className="App main-banner">
      <Container fluid className = "mainContainer">
        <Row>
          <Header />
        </Row>
        <Row id="intro">
          <PersonalDetails />
        </Row>
        <Row id="projects">
          <Projects />
        </Row>
        <Row id="skills">
         <Skills />
        </Row>
        <Row id="reachout">
          <ReachoutForm/>
        </Row>
        <Row>
          <Footer/>
        </Row>
        
      </Container>
    </div>
  );
}

export default App;
