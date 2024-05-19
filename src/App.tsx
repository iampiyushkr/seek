import React from 'react';
import logo from './logo.svg';
import Nav from './component/nav';
import Home from './screens/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountryDetails from './screens/countryDetails';
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<CountryDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
