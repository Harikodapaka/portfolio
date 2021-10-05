import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
            <Header />
        </Row>
      </Container>
    </div>
  );
}

export default App;
