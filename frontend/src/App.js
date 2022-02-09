import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Kiosk from './pages/Kiosk/';
import Web from './pages/Web';
import NotFound from './pages/NotFound/'
<<<<<<< HEAD
import Auth_SignIn from './pages/Auth/SignIn'
import Auth_SignUp from './pages/Auth/SignUp'
import UserInfo from './pages/Web/UserInfo'
import PasswordEdit from './pages/Web/PasswordEdit'
import WithDraw from './pages/Web/Withdraw'
import Survey from './pages/Web/Survey'

function App() {
  
=======
// import Auth_SignIn from './pages/Auth/SignIn'
// import Auth_SignUp from './pages/Auth/SignUp'
// import UserInfo from './pages/Web/UserInfo'
// import PasswordEdit from './pages/Web/PasswordEdit'
// import WithDraw from './pages/Web/Withdraw'
import Roulette from './pages/Web/Roulette'
import MileageSave from './pages/Web/MileageSave';
import MileageReturn from './pages/Web/MileageReturn';

function App() {
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Kiosk />}/>
        <Route path="/web" element={<Web />} />
<<<<<<< HEAD
        <Route path="/web/signin" element={<Auth_SignIn/>}/>
        <Route path="/web/signup" element={<Auth_SignUp/>}/>
        <Route path="/web/mypage" element={<UserInfo/>}/>
        <Route path="/web/mypage/passwordedit" element={<PasswordEdit/>}/>
        <Route path="/web/mypage/withdraw" element={<WithDraw/>}/>
        <Route path="/web/mypage/survey" element={<Survey/>}/>
=======
        <Route path="/web/mileagesave" element={<MileageSave />} />
        <Route path="/web/mileagereturn" element={<MileageReturn />} />
        <Route path="/web/roulette" element={<Roulette />} />
        {/* <Route path="/web/signin" element={<Auth_SignIn/>}/>
        <Route path="/web/signup" element={<Auth_SignUp/>}/> */}
        {/* <Route path="/web/mypage" element={<UserInfo/>}/> */}
        {/* <Route path="/web/mypage/passwordedit" element={<PasswordEdit/>}/> */}
        {/* <Route path="/web/mypage/withdraw" element={<WithDraw/>}/> */}
>>>>>>> 3358d5da2d1497dad0fa2609603ebae57cf25562
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
