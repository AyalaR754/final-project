import './index.css';
import './flags.css';
import './App.css';

import { PrimeReactProvider } from 'primereact/api';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import  { Suspense, useState } from 'react';

import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
//import userName from './Context'

import Users from './Components/Users'
import { Link, Route, Routes } from 'react-router-dom'

const LazyPost = React.lazy(() => import('./Components/Posts'))
const LazyTodo = React.lazy(() => import('./Components/Todos'))
const LazyUser = React.lazy(() => import('./Components/Users'))
const LazyHome= React.lazy(() => import('./Components/Home'))


//import App from './App';
function App() {

  const navigate = useNavigate();
  const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
              navigate('./Home')
        }
      },

        {
            label: 'Users',
            icon: 'pi pi-user',
            command: () => {
             navigate('./Users')
          }
        },
        {
          label: 'Todos',
          icon: 'pi pi-calendar-times',
          command: () => {
            navigate('./Todos')
         }
      },
        {
            label: 'Posts',
            icon: 'pi pi-envelope',
            command: () => {
              navigate('./Posts')
           }
        }
    ];
  return (
      <div className="App">
        <div className="card">
            <Menubar model={items} />
        </div>
     <div id="navbar">
       </div>
 
       <Routes> 
       <Route path='/Home' element={<Suspense fallback="loading..."><LazyHome  /></Suspense>} />
       <Route path='/Users' element={<Suspense fallback="loading..."><LazyUser  /></Suspense>} />
          <Route path='/Todos' element={<Suspense fallback="loading..."><LazyTodo /></Suspense>} />
          <Route path='/Posts' element={<Suspense fallback="loading..."><LazyPost /></Suspense>} />
  
       </Routes>
    </div>
  );
}

export default App;
