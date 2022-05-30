import { Route, Routes } from 'react-router-dom';
import './App.css';
import Aside from './Components/Aside/Aside';
import Follow from './Components/Main/Follow/Follow';
import Main from './Components/Main/Main';
import Nav from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Nav />
        <Main />
        <Aside />
      </div>
    </div>
  );
}

export default App;
