import React from 'react';

import { Routes, Route, } from 'react-router-dom'

import './App.css';
import {BannerComponent, SideBarComponent, StatisticsComponent, 
  TickestListComponent, AgentstListComponent} from './components';
  import {LoginPage, HomePage} from './pages'


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
            <Route path='/login' element={<LoginPage></LoginPage>}></Route>

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
