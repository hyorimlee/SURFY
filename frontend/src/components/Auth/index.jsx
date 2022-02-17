import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { CustomButton, CustomDialog, CustomDialogTitle, CustomDialogContent, TestLoginBox, TestLoginBtn, CustomTextField } from './styles';
import kakao_img from '../../images/kakao_login.png';
import google_img from '../../images/google_login.png';

const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE_URL;

export default function AlertDialog(props) {
  const { logined, btnText, header } = props;
  const [open, setOpen] = useState(false);
  const [isTest, setIsTest] = useState(false);
  const [testID, setTestID] = useState('');
  const [testPWD, setTestPWD] = useState('');
  let navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setIsTest(false);
    setOpen(false);
  };

  //카카오 가입 및 로그인
  const kakaoLogin = () => {
    //카카오 가입
    window.Kakao.Auth.login({
      success: function(response) {
        window.Kakao.API.request({
          url: '/v2/user/me',
          success: function(response) {
            handleClose();
            localStorage.setItem('id', `K${response.id}`);
            CustomLogin(response.kakao_account.profile.nickname);
          },
          fail: function(error) {
              alert('로그인 오류 발생');
          }
      });
      },
      fail: function(error) {
        console.log(error);
      },
    });
  }

  const googleLogin = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyBjxTBI-IEcKIyVBBHWwQzmME6DHFJop78",
      authDomain: "ssafy-test-331604.firebaseapp.com",
      projectId: "ssafy-test-331604",
      storageBucket: "ssafy-test-331604.appspot.com",
      messagingSenderId: "168706384408",
      appId: "1:168706384408:web:cfb76e6cbc71135579996d",
      measurementId: "G-4CRRTDEYGW"
    };

    initializeApp(firebaseConfig);
    const provider = new GoogleAuthProvider();
    
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        handleClose();
        localStorage.setItem('id', `G${result.user.uid}`);
        CustomLogin(result.user.displayName);
      })
  }

  const CustomLogin = (name) => {
    fetch(`http://i6a204.p.ssafy.io:8000/api/member/code/${localStorage.getItem('id')}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        if (!response) {
          fetch('http://i6a204.p.ssafy.io:8000/api/member/', {
            method: 'POST',
            body: JSON.stringify({
              'memberCode': localStorage.getItem('id'),
              'sns': localStorage.getItem('id').slice(0, 1) === 'G' ? 'google' : 'kakao',
              'name': name,
            }),
            headers:{
              'Content-Type': 'application/json'
            }
          })
          .then(response => response.json())
          .then(response => {
            localStorage.setItem('pk', response.id);
          })
        } else {
          localStorage.setItem('pk', response.id);
        }
        
        if (logined) {
          logined();
        } else if (header) {
          header();
        }
      })
  }

  const testLogin = () => {
    const query = { 'memberCode': testID, 'password': testPWD };
    const url = new URL(`${SERVER_BASE_URL}/api/member/login`);
    Object.keys(query).forEach(k => {
      url.searchParams.append(k, query[k]);
    })

    fetch(url).then(response => response.json()).then(response => {
      localStorage.setItem('pk', response.member_pk);
      localStorage.setItem('id', testID);
      handleClose();
      navigate('/web/');
    });
  }


  return (
    <div>
      <CustomButton onClick={handleClickOpen}>
        {btnText}
      </CustomButton>
      <CustomDialog
        open={open}
        onClose={handleClose}
      >
        <CustomDialogTitle id="alert-dialog-title">간편 로그인</CustomDialogTitle>
        <CustomDialogContent>
          <img src={google_img} alt="구글 로그인" onClick={googleLogin} />
          <img src={kakao_img} alt="카카오 로그인" onClick={kakaoLogin} />
          {
            isTest
            ?
              (
                <TestLoginBox>
                  <p>테스트 계정 로그인</p>
                  <CustomTextField id="outlined-basic" label="아이디" variant="outlined" value={testID} onChange={(e) => setTestID(e.target.value)} />
                  <CustomTextField id="filled-password-input" label="비밀번호" type="password" variant="outlined" value={testPWD} onChange={(e) => setTestPWD(e.target.value)} />
                  <TestLoginBtn variant="contained" color="primary" onClick={testLogin}>로그인</TestLoginBtn>
                </TestLoginBox>
              )
            : <TestLoginBtn variant="contained" color="primary" onClick={() => setIsTest(true)}>테스트 계정 로그인</TestLoginBtn>
          }
        </CustomDialogContent>
      </CustomDialog>
    </div>
  );
}
