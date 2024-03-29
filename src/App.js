import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';

import { Routes, Route } from 'react-router-dom';
import CountryDetail from './Pages/Home/CountryDetail/CountryDetail';

import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>


      <Navbar></Navbar>
      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/detail/:name" element={<CountryDetail></CountryDetail>}> </Route>
        <Route path='/register' element={<Register></Register>}> </Route>
        <Route path='/login' element={<Login></Login>}> </Route>
        {/* check */}

      </Routes>



      <ToastContainer />

    </div>
  );
}

export default App;
