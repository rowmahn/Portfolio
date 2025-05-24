import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Header from './Header/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
      </div>
    </BrowserRouter> 

  );
}

export default App;
