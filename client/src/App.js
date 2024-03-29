import './App.css';
import Home from './Pages/Home/Home';
import Room from './Pages/Rooms/Room';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import MyBooking from './Pages/MyBooking/MyBooking'
import Dashboard from './Pages/Dashboard/Dashboard'
import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Utils/Auth/AuthContext';
import { UpdatesProvider } from './Utils/UpdatesContext';

function App() {
return (
  <div className="App">
    <AuthProvider>
      <UpdatesProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Room/:CityName' element={<Room />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/SignUp' element={<SignUp />} />
          <Route path='/MyBooking' element={<MyBooking />} />
          <Route path='/Dashboard' element={<Dashboard />} />
        </Routes>
      </UpdatesProvider>
  </AuthProvider>
  </div>
);
}

export default App;
