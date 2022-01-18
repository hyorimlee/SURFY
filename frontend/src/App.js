import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Kiosk from './pages/Kiosk/';
import Web from './pages/Web';
import NotFound from './pages/NotFound/'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kiosk />}/>
        <Route path="/web" element={<Web />}>
          {/* <Route index element={}/> */}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
