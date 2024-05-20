import React from 'react';
import Home from './screens/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountryDetails from './screens/countryDetails';
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

function App() {
  //   const firebaseConfig = {
  //     apiKey: "AIzaSyDay-GmiA_wMEdQwyNSgXljC97BaCikDMg",
  //     authDomain: "seek-74c04.firebaseapp.com",
  //     projectId: "seek-74c04",
  //     storageBucket: "seek-74c04.appspot.com",
  //     messagingSenderId: "998293017267",
  //     appId: "1:998293017267:web:d98c1e3fb6b98f227b96c6",
  //     measurementId: "G-PE2GYK3583"
  //   };
  //   const app = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);
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
