import academicInfo from '../assets/images/cards/academic-info.jpg';
import lectureInfo from '../assets/images/cards/lecture-info.jpg';
import campusFacilities from '../assets/images/cards/campus-facilities.jpg';
import campusCafeteria from '../assets/images/cards/campus-cafeteria.jpg';
import yeokbukMap from '../assets/images/cards/yeokbuk-map.jpg';
import smartMap from '../assets/images/cards/smart-map.jpg';
import userCommunity from '../assets/images/cards/user-community.jpg';

const cardList = [
    {
      title: '학사 정보',
      path: 'academic-info',
      description: '학교 생활의 필수 정보, 수강 일정과 졸업 요건 확인',
      image: academicInfo,
    },
    {
      title: '강의 정보 및 추천',
      path: 'lecture-info',
      description: '학생들이 추천하는 꿀강 리스트와 수강평 모음',
      image: lectureInfo,
    },
    {
      title: '건물안내 및 캠퍼스 시설',
      path: 'campus-facilities',
      description: '학교 내 주요 건물 위치와 편의시설 정보',
      image: campusFacilities,
    },
    {
      title: '학교 식당 정보',
      path: 'campus-cafeteria',
      description: '오늘 뭐 먹지? 식단표와 맛집 가이드',
      image: campusCafeteria,
    },
    {
      title: '역북동 상권 지도',
      path: 'yeokbuk-map',
      description: '학교 주변 인기 장소 및 상권 정보 한눈에!',
      image: yeokbukMap,
    },
    {
      title: '개인 맞춤형 지도 서비스',
      path: 'smart-map',
      description: '나에게 맞는 장소를 추천해주는 스마트 지도',
      image: smartMap,
    },
    {
      title: '커뮤니티 & 소통 공간',
      path: 'user-community',
      description: '질문, 건의, 자유 주제로 소통하는 학생 커뮤니티 게시판',
      image: userCommunity,
    },
  ];

  export default cardList;