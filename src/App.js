import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Fragment } from 'react';
import Home from './Components/Modules/Home';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
