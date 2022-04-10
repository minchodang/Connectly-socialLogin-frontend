import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import KakaoAuth from './KakaoAuth';
import NaverAuth from './NaverAuth';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/kakao" element={<KakaoAuth />} />
        <Route path="/user/naver" element={<NaverAuth />} />
      </Routes>
    </BrowserRouter>
  );
}
