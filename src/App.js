import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Navbar from './components/Navbar';
import BMI from './pages/BMI';
import Cicilan from './pages/Cicilan';
import Kasir from './pages/Kasir';
import KonversiBilangan from './pages/KonversiBilangan';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/bmi' element={<BMI />} />
          <Route path='/cicilan' element={<Cicilan />} />
          <Route path='/kasir' element={<Kasir />} />
          <Route path='/konversi-bilangan' element={<KonversiBilangan />} />

        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;