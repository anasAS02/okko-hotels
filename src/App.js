import './App.css';
import Home from './Pages/Home/Home';
import Room from './Pages/Rooms/Room';
import Bayonne from './Pages/Rooms/Bayonne Centre/Bayonne';
import Cannes from './Pages/Rooms/Cannes Centre/Cannes';
import Grenoble from './Pages/Rooms/Grenoble Jardin Hoche/Grenoble';
import Lille from './Pages/Rooms/Lille Centre/Lille';
import Lyon from './Pages/Rooms/Lyon/Lyon';
import Nantes from './Pages/Rooms/Nantes/Nantes';
import Nice from './Pages/Rooms/Nice/Nice';
import Gare from './Pages/Rooms/Gare/Gare';
import Defense from './Pages/Rooms/Defense/Defense';
import Versailles from './Pages/Rooms/Versailles/Versailles';
import Rueil from './Pages/Rooms/Rueil/Rueil';
import Strasbourg from './Pages/Rooms/Strasbourg/Strasbourg';
import Toulon from './Pages/Rooms/Toulon/Toulon';

import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import MyBooking from './Pages/MyBooking/MyBooking'

import { Routes, Route } from 'react-router-dom';
import { createContext, useState,useEffect } from 'react';

export const loginContext = createContext();
export const setLoginStateContext = createContext();

function App() {
  
const [loginState, setLoginState] = useState(false);

useEffect(() => {
  const isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
  if (isUserLoggedIn) {
    setLoginState(true);
  }
}, [setLoginState]);

return (
  <div className="App">

    <loginContext.Provider value={loginState}>
    <setLoginStateContext.Provider value={setLoginState}>
  
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Room' element={<Room />} />
      <Route path='/Bayonne' element={<Bayonne />} />
      <Route path='/Cannes' element={<Cannes />} />
      <Route path='/Grenoble' element={<Grenoble />} />
      <Route path='/Lille' element={<Lille />} />
      <Route path='/Lyon' element={<Lyon />} />
      <Route path='/Nantes' element={<Nantes />} />
      <Route path='/Nice' element={<Nice />} />
      <Route path='/Gare' element={<Gare />} />
      <Route path='/Defense' element={<Defense />} />
      <Route path='/Versailles' element={<Versailles />} />
      <Route path='/Rueil' element={<Rueil />} />
      <Route path='/Strasbourg' element={<Strasbourg />} />
      <Route path='/Toulon' element={<Toulon />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/SignUp' element={<SignUp />} />
      <Route path='/MyBooking' element={<MyBooking />} />
    </Routes>
  </setLoginStateContext.Provider>
  </loginContext.Provider>
  </div>
);
}

export default App;
