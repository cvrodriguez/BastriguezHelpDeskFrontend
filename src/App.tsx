import React from 'react';
import HomePage from './pages/HomePage'
import { Routes, Route, } from 'react-router-dom'
import './App.css';


function App() {

 
  return (
    <div className="App">
      

       <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
       </Routes>
    </div>
  );
}

export default App;
