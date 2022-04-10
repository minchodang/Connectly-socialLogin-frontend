import { useEffect } from 'react';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';

export default function KakaoAuth() {
  const navigate = useNavigate();
  let params = new URLSearchParams(document.location.search);
  let code = params.get('code');
  const CLIENT_ID = '06130ec2e7dc5a6df4db7e48354169d5';
  const REDIRECT_URI = 'http://localhost:3000/user/kakao';
  useEffect(() => {
    fetch('https://kauth.kakao.com/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: qs.stringify({
        grant_type: 'authorization_code',
        client_id: CLIENT_ID,
        redirect_uri: REDIRECT_URI,
        code: code,
      }),
    })
      .then(res => res.json())
      .then(data =>
        fetch(`${process.env.REACT_APP_SERVER_HOST}/user/kakao`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: data.access_token,
          },
        })
          .then(res => res.json())
          .then(data => sessionStorage.setItem('token', data.accessToken))
          .then(alert('connectly에 오신 것을 환영합니다😊'))
          .then(navigate('/'))
          .catch(err => console.log('err : ', err)),
      );
  }, [code]);

  return <div></div>;
}
