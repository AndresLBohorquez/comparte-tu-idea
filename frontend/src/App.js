import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import TopicScreen from './screens/TopicScreen';
import LoginScreen from './screens/LoginScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
        <header>
          <Navbar className='nav-color' variant="dark">
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>
                  <img className='nav-logo' src='./images/logo.png' alt='img' />Comparte tu idea</Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main>
          <Container>
            <Routes>
              <Route path="/topic/:slug" element={<TopicScreen />} />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/login" element={<LoginScreen />} />
            </Routes>
          </Container>

        </main>
        <footer className='text-center'>
          <div>@Derechos reservados Tatiana Rodríguez - Leonardo Bohórquez </div>
          <small>2022</small>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
