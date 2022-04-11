import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main/Main';
import KakaoAuth from './KakaoAuth';
import NaverAuth from './NaverAuth';
import NextPage from './Pages/NextPage/NextPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/kakao" element={<KakaoAuth />} />
        <Route path="/user/naver" element={<NaverAuth />} />
        <Route path="/nextpage" element={<NextPage />} />
      </Routes>
    </BrowserRouter>
  );
}
