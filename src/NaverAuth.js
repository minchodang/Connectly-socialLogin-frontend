import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NaverAuth() {
  const navigate = useNavigate();
  useEffect(() => {
    window.location.href.includes('access_token') && GetUser();
    function GetUser() {
      const location = window.location.href.split('=')[1];
      const access_token = location.split('&')[0];
      fetch(`${process.env.REACT_APP_SERVER_HOST}/user/naver`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          Authorization: access_token,
        },
      })
        .then(res => res.json())
        .then(data => sessionStorage.setItem('token', data.accessToken))
        .then(alert('connectly에 오신 것을 환영합니다😊'))
        .then(navigate('/'))
        .catch(err => console.log('err : ', err));
    }
  }, []);

  return <div></div>;
}
