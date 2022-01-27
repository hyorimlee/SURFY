import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Kiosk from './pages/Kiosk/';
import Web from './pages/Web';
import NotFound from './pages/NotFound/'
import Auth_SignIn from './pages/Auth/SignIn'
import Auth_SignUp from './pages/Auth/SignUp'
import UserInfo from './pages/Web/UserInfo'
import PasswordEdit from './pages/Web/PasswordEdit'
import WithDraw from './pages/Web/Withdraw'
import Survey from './pages/Web/Survey'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kiosk />}/>
        <Route path="/web" element={<Web />} />
        <Route path="/web/signin" element={<Auth_SignIn/>}/>
        <Route path="/web/signup" element={<Auth_SignUp/>}/>
        <Route path="/web/mypage" element={<UserInfo/>}/>
        <Route path="/web/mypage" element={<UserInfo/>}/>
        <Route path="/web/mypage/passwordedit" element={<PasswordEdit/>}/>
        <Route path="/web/mypage/withdraw" element={<WithDraw/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
