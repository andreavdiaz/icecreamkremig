import React from 'react';
import './App.css';
import './index.css';
import { Header } from './components/Header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './components/Home/Home';

const App = () => {
  return(
    <BrowserRouter>
        <Routes>
            <Route path= '/' element={<Header/>} > 
            <Route path= '/Home' element={<Home/>} > </Route>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
export default App 

