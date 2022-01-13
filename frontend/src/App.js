import * as React from 'react';
<<<<<<< HEAD
import Home from './pages/Kiosk'
function App() {
  return (
    <>
    {/* <div className="App"> */}
      <Home />
    {/* </div> */}
    </>
  )
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Kiosk from './pages/Kiosk/';
import NotFound from './pages/NotFound/'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kiosk />}/>
        {/* 웹 페이지 구성시 주석 해제
        <Route path="/web" element={}>
          <Route index element={}/>
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
>>>>>>> a56dbeb3ba37dc22f20941ed21d3bc8db90fd179
}

export default App;