import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Fragment } from 'react';
import Home from './Components/Modules/Home';
import Perfil from './Components/Modules/Perfil';
import Login from './Components/Modules/Login';
import Register from './Components/Modules/Register';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path='/Perfil' element={<Perfil/>} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
