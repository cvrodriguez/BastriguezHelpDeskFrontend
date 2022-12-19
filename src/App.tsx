import React from 'react';

import { Routes, Route, } from 'react-router-dom'

import './App.css';
import {
  BannerComponent, SideBarComponent, StatisticsComponent,
  TickestListComponent, AgentstListComponent, UserCreate
} from './components';
import { LoginPage, HomePage, MainPage, TicketDetailPage } from './pages'


function App() {


  return (

    <div className='App'>
      <BannerComponent></BannerComponent>


      <div className='main-container'>
        <SideBarComponent></SideBarComponent>
        <div className='main-section'>

          <Routes >
            <Route path='/login' element={<LoginPage></LoginPage>}></Route>
            <Route path='/main' element={<MainPage></MainPage>}>
              <Route path='createUser' element={<UserCreate />} />
              <Route index element={<UserCreate />} />
            </Route>
          
            <Route path='/' element={<HomePage></HomePage>}>
              <Route path='statistics'  element={<StatisticsComponent />} />
              <Route index element={<TickestListComponent />} />
              <Route path='tickets' element={<TickestListComponent />} />
              <Route path='agents' element={<AgentstListComponent />} />
            </Route>
            <Route path='/ticket_detail/:id' element={<TicketDetailPage/>}></Route>
          </Routes>
        </div>

      </div>

    </div>
  );
}

export default App;
