import React from 'react';
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import { Routes, Route, } from 'react-router-dom'
import BannerComponent from './components/BannerComponent'
import SideBarComponent from './components/SideBarComponent'



import './App.css';
import StatisticsComponent from './components/StatisticsComponent';
import TickestListComponent from './components/TickestListComponent';
import AgentstListComponent from './components/AgentstListComponent';


function App() {

  
  return (

    <div className='App'>
      <div>
        <BannerComponent></BannerComponent>
      </div>


      <div className='main-container'>
        <SideBarComponent></SideBarComponent>
        <div className='main-section'>

          <Routes >
            <Route path='/login' element={<Login></Login>}></Route>

            <Route path='/' element={<HomePage></HomePage>}>
              <Route path='statistics' index element={<StatisticsComponent />} />
              <Route path='tickets' element={<TickestListComponent />} />
              <Route path='agents' element={<AgentstListComponent />} />
            </Route>
          </Routes>
        </div>

      </div>

    </div>
  );
}

export default App;
