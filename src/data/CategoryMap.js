const categoryMap = {
  '/': [
    { id: 1, name: '학사 정보', path: '/academic-info' },
    { id: 2, name: '강의 정보 및 추천', path: '/lecture-info' },
    { id: 3, name: '건물안내 및 캠퍼스 시설', path: '/campus-facilities' },
    { id: 4, name: '학교 식당 정보', path: '/campus-cafeteria' },
    { id: 5, name: '역북동 상권 지도', path: '/yeokbuk-map' },
    { id: 6, name: '개인 맞춤형 지도 서비스', path: '/smart-map' },
    { id: 7, name: '사용자 소통 창구', path: '/user-community' },
    
  ],
  '/academic-info': [
    { id: 1, name: '학과 소개', path: '/academic-info/intro' },
    { id: 2, name: '학사 일정', path: '/academic-info/calendar' },
    { id: 3, name: '수강신청 일정', path: '/academic-info/apply-schedule' },
    { id: 4, name: '필수 과목 안내', path: '/academic-info/required-courses' },
    { id: 5, name: '수강 신청 팁', path: '/academic-info/apply-tips' },
  ],
  '/lecture-info': [
    { id: 1, name: '전공 강의 소개', path: '/lecture-info/major-overview' },
    { id: 2, name: '교수님 정보', path: '/lecture-info/professors' },
    { id: 3, name: '교수님 강의 스타일 및 후기', path: '/lecture-info/professor-evaluations' },
    { id: 4, name: '인기 교양 과목 소개', path: '/lecture-info/popular-electives' },
    { id: 5, name: '학생 추천 교양 과목 리스트', path: '/lecture-info/recommended-electives' },
    { id: 6, name: '강의 시 주의 사항', path: '/lecture-info/lecture-tips' },
  ],
  '/campus-facilities': [
    { id: 1, name: '강의실 번호 읽는 법', path: '/campus-facilities/classroom-number-guide' },
    { id: 2, name: '단과대별 위치 안내', path: '/campus-facilities/college-locations' },
    { id: 3, name: '편의시설 위치 및 운영시간', path: '/campus-facilities/convenience-info' },
    { id: 4, name: '학과 사무실 및 오피스 위치', path: '/campus-facilities/office-locations' },
    { id: 5, name: '흡연구역 안내', path: '/campus-facilities/smoking-areas' },
    { id: 6, name: '주차장 안내', path: '/campus-facilities/parking-info' },
  ],
  '/campus-cafeteria': [
    { id: 1, name: '학생 식당 정보', path: '/campus-cafeteria/campus-cafeteria-intro' },
    { id: 2, name: '학식 메뉴표', path: '/campus-cafeteria/campus-cafeteria-menu' },
  ],
  '/yeokbuk-map': [
    { id: 1, name: '역북동 지도 전체 보기', path: '/yeokbuk-map/map-page'}
  ],
  '/smart-map': [
    { id: 1, name: '개인 맞춤형 지도 서비스', path: '/smart-map/my-map' },
    { id: 2, name: '추천 장소 보기', path: '/smart-map/recommended-places' },
  ],
  '/user-community': [
    { id: 1, name: '자유 게시판', path: '/user-community/free-board' },
    { id: 2, name: '질문 게시판', path: '/user-community/question-board' },
    { id: 3, name: '건의 사항', path: '/user-community/suggestion-board' },
    { id: 4, name: '관리자 문의', path: '/user-community/inquiry-board' },
  ]
};

export default categoryMap;
