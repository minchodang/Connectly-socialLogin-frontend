import styled from 'styled-components';
import { customMedia } from '../../styles/GlobalStyle';

export default function KakaoLogin() {
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=06130ec2e7dc5a6df4db7e48354169d5&redirect_uri=http://localhost:3000/user/kakao&response_type=code`;

  return (
    <LoginBt type="button">
      <a href={KAKAO_AUTH_URL}>
        <img src="/images/kakaoLogin.png" alt="kakaoLoginBt" />
      </a>
    </LoginBt>
  );
}

const LoginBt = styled.button`
  all: unset;
  position: absolute;
  top: 73%;
  z-index: 99;

  ${customMedia.greaterThan('desktop')`
    all: unset;
  position: absolute;
  top: 70%;
  z-index: 99;
  `}
  ${customMedia.greaterThan('tablet')`
    all: unset;
  position: absolute;
  top:72%;
  z-index: 99;
  `}
  ${customMedia.lessThan('mobile')`
    all: unset;
    width:70%;
    position: absolute;
    top:75%;
`}
  a {
    text-decoration: none;
    color: black;
  }
`;
