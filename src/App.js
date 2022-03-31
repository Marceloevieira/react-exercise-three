import { Container } from 'react-bootstrap';
import './App.css';
import { Header } from './components/Header';
import { ApplicationRoutes } from './config/ApplicationRoutes';

function App() {
  return (
    <div className="App">
        <Container fluid>
          <Header />
          <section>
            <ApplicationRoutes></ApplicationRoutes>
          </section>
        </Container>

    </div>
  );
}

export default App;
