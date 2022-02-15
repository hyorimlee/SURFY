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
        {/* <Route path="/web/signin" element={<Auth_SignIn/>}/>
        <Route path="/web/signup" element={<Auth_SignUp/>}/> */}
        {/* <Route path="/web/mypage" element={<UserInfo/>}/> */}
        {/* <Route path="/web/mypage/passwordedit" element={<PasswordEdit/>}/> */}
        {/* <Route path="/web/mypage/withdraw" element={<WithDraw/>}/> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
