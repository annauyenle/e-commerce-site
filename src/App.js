import { Container } from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Home, Header, Cart } from './components';

function App() {
  return (
    <Container fluid>
      <BrowserRouter>
        <div className='App'>
          <Header />
          <Route exact path="/"><Home /></Route>
          <Route path="/cart"><Cart /></Route>
        </div>
      </BrowserRouter>
    </Container>
  );
}

export default App;
