import React from 'react';
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Spinner from 'react-bootstrap/Spinner';
import { Routes, Route, } from 'react-router-dom'

import './App.css';
import {
  BannerComponent, SideBarComponent, StatisticsComponent,
  TickestListComponent, AgentstListComponent, UserCreate
} from './components';
import { HomePage, MainPage, TicketDetailPage } from './pages'
import { loginSuccess } from './store/user/slice';
import { useAppDispatch } from './hooks';
import { CreateTicket } from './pages/CreateTikectPage';

function App() {
  const { user, isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();
  const dispatch = useAppDispatch()
  const { loginWithRedirect } = useAuth0();

  useEffect(() => {
    const role = async () => {
      const claims = await getIdTokenClaims();

      if (claims) {
        const roles = claims!['http://bastriguez.com/roles']
        dispatch(loginSuccess({ user, isAuthenticated, isLoading, roles }))
      }
    }
    role()
  }, [user, getIdTokenClaims])

  if (isLoading) {
    return <div>
      <Spinner animation="grow" size="sm" />
      <Spinner animation="grow" />
      Loading ...</div>;
  }
  if (!isAuthenticated) {
    loginWithRedirect()
    return<div>
     <Spinner animation="grow" size="sm" />
    </div>
  }

  return (

    <div className='App'>
      <BannerComponent></BannerComponent>

      <div className='main-container'>
        <SideBarComponent></SideBarComponent>
        <div className='main-section'>

          <Routes >
           
            <Route path='/main' element={<MainPage></MainPage>}>
              <Route path='createUser' element={<UserCreate />} />
              <Route index element={<UserCreate />} />
            </Route>

            <Route path='/' element={<HomePage></HomePage>}>
              <Route path='statistics' element={<StatisticsComponent />} />
              <Route index element={<TickestListComponent />} />
              <Route path='tickets' element={<TickestListComponent />} />
              <Route path='agents' element={<AgentstListComponent />} />
            </Route>

            <Route path='/ticket_detail/:id' element={<TicketDetailPage />}></Route>
            <Route path='/createTicket' element={<CreateTicket />}></Route>

          </Routes>
        </div>

      </div>

    </div>
  );
}

export default App;
