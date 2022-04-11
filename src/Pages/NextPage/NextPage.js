import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function NextPage() {
  const navigate = useNavigate();

  const goMain = () => {
    navigate('/');
  };

  return (
    <FullContainer>
      <Main>커넥틀리에 정상적으로 로그인 되었습니다.😊</Main>
      <GoLogin onClick={goMain}>로그인 창으로 이동</GoLogin>
    </FullContainer>
  );
}
const FullContainer = styled.div`
  text-align: center;
`;

const Main = styled.h1`
  font-size: 5em;
`;

const GoLogin = styled.button`
  border: 1px solid gray;
  background-color: aliceblue;
  height: 3em;
  border-radius: 2em;
`;
