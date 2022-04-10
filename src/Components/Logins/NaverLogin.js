import { useEffect } from 'react';
import styled from 'styled-components';

export default function NaverLogin() {
  const { naver } = window;

  const Login = () => {
    Naver();
    //UserProfile();
  };

  useEffect(Login, []);

  const Naver = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'PQXp_8s1C5yvI3LaYcJn',
      callbackUrl: 'http://localhost:3000/user/naver',
      isPopup: false,
      loginButton: { color: 'green', type: 3, height: 40 },
      callbackHandle: true,
    });
    naverLogin.init();
  };

  // const UserProfile = () => {
  //   window.location.href.includes('access_token') && GetUser();
  //   function GetUser() {
  //     const location = window.location.href.split('=')[1];
  //     const token = location.split('&')[0];
  //     console.log('token: ', token);
  //     // fetch(`${API}/account/sign-in`, {
  //     //   method: 'GET',
  //     //   headers: {
  //     //     'Content-type': 'application/json',
  //     //     Authorization: token,
  //     //   },
  //     // })
  //     //   .then(res => res.json())
  //     //   .then(res => {
  //     //     localStorage.setItem('access_token', res.token);
  //     //     setUserData({
  //     //       nickname: res.nickname,
  //     //       image: res.image,
  //     //     });
  //     //   })
  //     //   .catch(err => console.log('err : ', err));
  //   }
  // };

  return <LoginLink onClick={Login} id="naverIdLogin" />;
}

const LoginLink = styled.button`
  all: unset;
  position: absolute;
  top: 70%;
  z-index: 99;
`;
