# KDH Portfolio

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fkdh379%2Fportfolio&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)

<img src="https://res.cloudinary.com/dkhp8gzh3/image/upload/v1703167034/ttiftktlsccrvvxn5idh.png">

## 1. 프로젝트 소개

- 개인 이력서 웹사이트 입니다.
- 저의 기술 스택과 경력사항을 소개합니다.
- 반응형 디자인을 적용하여 모바일 환경에서도 이용할 수 있습니다.

## 2. 기술 스택

- 코어 : TypeScript, React, Next.js
- 상태 관리 : React-Query
- 스타일링 : Sass, CSS Module, Tailwind CSS, daisyui
- 패키지 : PNPM
- 배포 : Vercel

## 3. 프로젝트 구성

- Next.js App Router
- React-Query를 서버 사이드 렌더링에 적용
    - 공통 API 모듈 [utils/api.ts](utils/api.ts)
    - API 훅 [hooks/*.ts](hooks/)
    - 비동기 에러 바운더리 [components/boundary/async-boundary.tsx](components/boundary/async-boundary.tsx)
- Tailwind CSS + daisyui
    - Dark / Light 모드 지원
    - 반응형 디자인
- 시멘틱 마크업

## 4. 프로젝트 개요

url : https://kdh-portfolio.vercel.app/

