import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Home, Header, Cart } from './components';

function App() {
  return (
    <BrowserRouter>

      <div>
        <Header />
        <Route exact path="/"><Home /></Route>
        <Route path="/cart"><Cart /></Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
