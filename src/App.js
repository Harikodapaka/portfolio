import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'
import Header from './components/Header/Header';
import PersonalDetails from './components/PersonalDetails/PersonalDetails';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Header />
        </Row>
        <Row>
          <PersonalDetails />
        </Row>
        <Row>
          <Projects />
        </Row>
      </Container>
    </div>
  );
}

export default App;
