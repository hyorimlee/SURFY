import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

import { CustomButton, CustomDialog, CustomDialogTitle, CustomDialogContent } from './styles';

import kakao_img from '../../../images/kakao_login.png';
import google_img from '../../../images/google_login.png';

export default function AlertDialog(props) {
  const { logined } = props;
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
            logined();
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
        logined();
      })
  }

  const CustomLogin = (name) => {
    fetch(`http://i6a204.p.ssafy.io:8000/api/member/code/${localStorage.getItem('id')}`)
      .then(response => {
        return response.json();
      })
      .then(response => {
        console.log(response);
        
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
          .then(response => {
            return response.json()
          })
          .then(response => console.log(response))
        }
      })
  }


  return (
    <div>
      <CustomButton onClick={handleClickOpen}>
        상품 받기
      </CustomButton>
      <CustomDialog
        open={open}
        onClose={handleClose}
      >
        <CustomDialogTitle id="alert-dialog-title">간편 로그인</CustomDialogTitle>
        <CustomDialogContent>
          <img src={google_img} alt="구글 로그인" onClick={googleLogin} />
          <img src={kakao_img} alt="카카오 로그인" onClick={kakaoLogin} />
        </CustomDialogContent>
      </CustomDialog>
    </div>
  );
}
