import React from 'react';
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import { Routes, Route, } from 'react-router-dom'
import './App.css';


function App() {

 
  return (
    <div className="App">
      

       <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
       </Routes>
    </div>
  );
}

export default App;
