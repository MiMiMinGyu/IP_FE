const categoryMap = {
  '/': [
    { id: 1, name: '학사 정보', path: '/academic-info' },
    { id: 2, name: '강의 정보 및 추천', path: '/lecture-info' },
    { id: 3, name: '건물안내 및 캠퍼스 시설', path: '/campus-facilities' },
    { id: 4, name: '학교 식당 정보', path: '/school-dining' },
    { id: 5, name: '역북동 상권 지도', path: '/yeokbuk-map' },
    { id: 6, name: '개인 맞춤형 지도 서비스', path: '/smart-map' },
    { id: 7, name: '사용자 소통 창구', path: '/user-communication' },
  ],
  '/academic-info': [
    { id: 1, name: '학과 소개', path: '/academic-info' },
    { id: 2, name: '졸업 요건 안내', path: '/page1-1/step2' },
    { id: 3, name: '필수과목 안내', path: '/page1-1/step3' },
  ],
  '/page2-1': [
    { id: 1, name: '강의 추천 리스트', path: '/page2-1/list' },
    { id: 2, name: '수강생 리뷰 모음', path: '/page2-1/review' },
  ],
};

export default categoryMap;
