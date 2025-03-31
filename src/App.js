import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Fragment } from 'react';
import Home from './Components/Modules/Home';
import Perfil from './Components/Modules/Perfil';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path='/Perfil' element={<Perfil/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
