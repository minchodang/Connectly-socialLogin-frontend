import { useEffect } from 'react';
import styled from 'styled-components';
import { customMedia } from '../../styles/GlobalStyle';

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
  return <LoginLink onClick={Login} id="naverIdLogin" />;
}

const LoginLink = styled.button`
  all: unset;
  position: absolute;
  top: 65%;
  z-index: 99;

  ${customMedia.greaterThan('desktop')`
    all: unset;
  position: absolute;
  top: 65%;
  z-index: 99;
  `}

  ${customMedia.lessThan('mobile')`
    all: unset;
    width:70%;
    position: absolute;
    top:65%;
`}
`;
