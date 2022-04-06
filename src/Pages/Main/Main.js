import styled from 'styled-components';

export default function Main() {
  return (
    <FullContainer>
      <BackImage src="/images/clothes.png" alt="clothes" />
      <Logo src="/images/blackLogo.png" alt="logo" />
    </FullContainer>
  );
}

const BackImage = styled.img`
  width: 53%;
`;

const Logo = styled.img`
  position: absolute;
  top: 50%;
  width: 20%;
`;

const FullContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FirstMessage = styled.h1`
  color: red;
`;
