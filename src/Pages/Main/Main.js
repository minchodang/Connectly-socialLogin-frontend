import styled from 'styled-components';
import KakaoLogin from '../../Components/Logins/KakaoLogin';
import NaverLogin from '../../Components/Logins/NaverLogin';
import { customMedia } from '../../styles/GlobalStyle';

export default function Main() {
  return (
    <BackImage>
      <LoginContainer>
        <Logo src="/images/blackLogo.png" alt="logo" />
        <NaverLogin />
        <KakaoLogin />
      </LoginContainer>
    </BackImage>
  );
}

const BackImage = styled.header`
  ::before {
    content: '';
    opacity: 0.2;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    background-color: white;
  }
  height: 100vh;
  background-image: url('/images/clothes.png');
  /* flex-box thing */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-size: cover;
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  width: 20%;
  z-index: 99;

  ${customMedia.lessThan('tablet')`
    width:70%;
`}
  ${customMedia.lessThan('mobile')`
    width:70%;
    position: absolute;
    top: 40%;
`}
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
