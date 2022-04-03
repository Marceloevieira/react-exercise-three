import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import { Header } from './components/Header';
import { ApplicationRoutes } from './config/ApplicationRoutes';

function App() {
  return (
    <Container
      fluid
      className={'text-center'}

    >
      <Row
        className={'h-25'}
      >
        <Col>
          <Header />
        </Col>
      </Row>
      <Row
        className={'h-75'}
      >
        <Col>
          <ApplicationRoutes></ApplicationRoutes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
