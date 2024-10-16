import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { Component } from 'react'
import Home from './Home';
import Cine from './Cine';
import Musica from './Musica';
import FormSimple from './FormSimple';
import Collatz from './Collatz';

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/musica' element={<Musica/>}/>
            <Route path='/cine' element={<Cine/>}/>
            <Route path='/form' element={<FormSimple/>}/>
            <Route path='/collatz' element={<Collatz/>}/>
        </Routes>
      </BrowserRouter>
    )
  }
}
