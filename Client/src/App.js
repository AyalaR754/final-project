import './index.css';
import './flags.css';
import './App.css';

import { PrimeReactProvider } from 'primereact/api';

import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import  { Suspense, useState } from 'react';
import userName from './Context/UserName';

import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';
//import userName from './Context'

import { Link, Route, Routes } from 'react-router-dom'

const LazyGrade = React.lazy(() => import('./Components/Grades'))
const LazyHome = React.lazy(() => import('./Components/Home'))
const LazyLogOut = React.lazy(() => import('./Components/LogOut'))

//import App from './App';
function App() {
  const [name, setName] = useState("userName")
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
        },
        {
          label: name,
          icon: 'pi pi-user',
          command: () => {
           navigate('./LogOut')
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
 
      <userName.Provider value={{ name, setName }} >
       <Routes> 
       <Route path='/Home' element={<Suspense fallback="loading..."><LazyHome  /></Suspense>} />
       <Route path='/Grades' element={<Suspense fallback="loading..."><LazyGrade  /></Suspense>} />
       <Route path='/LogOut' element={<Suspense fallback="loading..."><LazyLogOut  /></Suspense>} />
       </Routes>
       </userName.Provider>
    </div>
  );
}

export default App;
