# Connectly 소셜 로그인 구현

# 시연 모습.
![Kapture 2022-04-11 at 14 05 45](https://user-images.githubusercontent.com/90169703/162669691-6b6c5b03-8963-4f95-b723-cc3252520cdc.gif)

## Introduction

커넥틀리 소셜 로그인 구현 화면을 네이버와 카카오 소셜 로그인으로 구현해 봤습니다. 

- 기간 : 22.04.05 ~ 22.04.11 (총 6일)

## 레포지토리 주소

- [Front-end Github](https://github.com/minchodang/Connectly-socialLogin-frontend)
- [Back-end Github](https://github.com/minchodang/Connectly-socialLogin-backend)

## CLONE 후 해당 프로젝트 실행 방법.
- 1. git clone후, npm install을 통해 pakage.json 패키지 설치. 
- 2. npm start를 통해 서버 시작 스크립트 실행.
- 3. 브라우저에서 해당 페이지 확인. 

## 사용한 라이브러리

- [styled-media-query](https://www.npmjs.com/package/styled-media-query)

## Technologies

- Front-end

<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">

## 구현 기능.

[ Front-end ]

<강민수>

1. 메인 로그인 페이지 ui 구축.
- 백그라운드 이미지를 전체 배경 이미지 css
- 로그인 버튼 적용.

2. 네이버 및 카카오 소셜 로그인 기능 구현. 
- 네이버는 sdk 방식, 카카오는 rest api 방식으로 구현. 
- 라우팅 기능 적용하여, 리다이렉트 uri 페이지를 통해 서버 통신 구현. 
- 유즈 이펙트를 활용한 소셜서비스 서버 및 백엔드 서버 통신 fetch 로 구현. 

3. 다음 페이지 이동 및 버튼 구현. 
- 토큰 발급 후, 유즈 네비게이트 활용한 다른 페이지 이동. 
- 이후, 다시 해당 페이지 내에서 로그인 페이지로 이동하는 버튼 생성. 


### Contact Me

- 강민수 minsu910725@gmail.com

