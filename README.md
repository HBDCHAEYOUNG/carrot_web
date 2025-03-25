<div align="center"><img src="https://github.com/user-attachments/assets/54fe603b-0d34-4d2a-97ec-43c195a07360" alt="Material Bread logo"></div>

# 🌐 Demo Server
https://carrot-web-storage-pu2t.vercel.app/?area=1

# 🎬 Carrot Clone Project

당근마켓의 주요 기능들을 구현한 클론 프로젝트입니다. 모바일 환경에 최적화된 UI/UX를 제공합니다. 🚀

## 🚀 프로젝트 소개

당근마켓의 핵심 기능들을 구현한 클론 프로젝트입니다. 회원가입과 로그인, 지역 기반 서비스, 상품 CRUD, 채팅, 찜하기 등 당근마켓의 주요 기능들을 구현했습니다. 특히 모바일 환경에 최적화된 UI/UX를 제공하여 실제 서비스와 유사한 사용자 경험을 제공합니다.

## 🛠 사용 기술

- **프론트엔드**: React, TypeScript, Zustand, React Router, FSD Architecture
- **UI 라이브러리**: Tailwind CSS, shadcn/ui

<div align="center">
    <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white"/>
    <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logoColor=white&logo=shadcnui"/>
    <img src="https://img.shields.io/badge/fetch-4285F4?style=for-the-badge&logoColor=white"/>
    <img src="https://img.shields.io/badge/Zustand-8E44AD?style=for-the-badge&logoColor=white"/>
    <img src="https://img.shields.io/badge/FSD (Feature Slice Design)-FF5733?style=for-the-badge&logoColor=white"/>
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white"/>
    <img src="https://img.shields.io/badge/React Router-CA4245?style=for-the-badge&logo=React Router&logoColor=white"/>
</div>

## 📌 주요 기능

1. **로그인 & 회원가입** 🔐

<img  align="right" src="https://github.com/user-attachments/assets/8a3b4068-baad-4ff2-b41f-be5ba187e73b" width="20%" margin-right="20%">

- JWT 인증 방식 적용
- 카카오 소셜 로그인 지원

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

2. **지역 기반 서비스** 🌍

<img  align="right" src="https://github.com/user-attachments/assets/d2df06c8-e4e9-4a4f-9af1-9e841f3d524f" width="20%" >

- 사용자별 최대 2개 동네 설정 가능
- 지역 기반 상품 필터링

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

3. **관심/찜하기 기능** 🧡

<img  align="right" src="https://github.com/user-attachments/assets/eb7aff80-91df-469b-ad18-bfda4b8192d1" width="20%">

   - 관심 있는 상품 찜하기
   - 찜한 상품 모아보기
   - 관심 상품 가격 변동 알림

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />


4. **검색 기능** 🔍

<img  align="right" src="https://github.com/user-attachments/assets/f4db2199-f908-4708-b2af-738d0f99521e" width="20%">

   - 키워드 기반 상품 검색
   - 카테고리별 필터링
   - 가격대 설정
   - 최신순/인기순 정렬
   - 검색 기록 관리

<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

## 🏗 프로젝트 구조 (FSD - Feature Slice Design)

```
📂 src
 ┣ 📂 app         # 애플리케이션 초기 설정 (라우팅, 글로벌 스타일, 프로바이더 등)
 ┣ 📂 pages       # 전체 페이지 및 중첩 라우팅이 적용된 대형 페이지 단위
 ┣ 📂 widgets     # 특정 기능을 담당하는 독립적인 UI 블록 (예: 네비게이션 바, 사이드바)
 ┣ 📂 features    # 사용자가 직접 수행하는 주요 기능 (예: 좋아요 버튼, 검색 필터)
 ┣ 📂 entities    # 비즈니스 엔티티 (예: User, Movie, Genre)
 ┗ 📂 shared      # 공통 모듈 (유틸리티, API 함수, UI 컴포넌트 등)
```

# 🛠 기술적 도전

- Feature Slice Design 아키텍처 적용으로 확장 가능한 코드 구조 구현
- Tailwind CSS와 shadcn/ui를 활용한 모던한 UI/UX
- React Hook Form과 Zod를 활용한 견고한 폼 검증
- Zustand를 활용한 효율적인 상태 관리
- 카카오 소셜 로그인 기능
- 모바일 환경 최적화
