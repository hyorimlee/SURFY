import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Kiosk from './pages/Kiosk/';
import Web from './pages/Web';
import NotFound from './pages/NotFound/'
import Roulette from './pages/Web/Roulette'
import MileageSave from './pages/Web/MileageSave';
import MileageReturn from './pages/Web/MileageReturn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kiosk />}/>
        <Route path="/web" element={<Web />} />
        <Route path="/web/mileagesave" element={<MileageSave />} />
        <Route path="/web/mileagereturn" element={<MileageReturn />} />
        <Route path="/web/roulette/:surveyId" element={<Roulette />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
