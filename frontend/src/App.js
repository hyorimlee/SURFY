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
}

export default App;
