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

import { Link, Route, Routes } from 'react-router-dom'

const LazyGrade = React.lazy(() => import('./Components/Grades'))
const LazyHome = React.lazy(() => import('./Components/Home'))


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
            label: 'Grades',
            icon: 'pi pi-user',
            command: () => {
             navigate('./Grades')
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
       <Route path='/Grades' element={<Suspense fallback="loading..."><LazyGrade  /></Suspense>} />
       </Routes>
    </div>
  );
}

export default App;
