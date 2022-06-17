import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home';

import { Routes, Route } from 'react-router-dom';
import CountryDetail from './Pages/Home/CountryDetail/CountryDetail';

import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';


function App() {
  return (
    <div>

      <Routes>

        <Route path='/' element={<Home></Home>}></Route>
        <Route path="/detail/:name" element={<CountryDetail></CountryDetail>}> </Route>
        <Route path='/register' element={<Register></Register>}> </Route>
        <Route path='/register' element={<Login></Login>}> </Route>

      </Routes>





    </div>
  );
}

export default App;
