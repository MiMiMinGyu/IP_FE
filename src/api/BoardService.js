import axios from 'axios';

const BASE_URL = "http://localhost:3000";

// 게시판 종류를 받는 구조로 수정
export const fetchPosts = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/boards`);
    return response.data;
  } catch (error) {
    console.error('❌ 게시글 불러오기 실패:', error);
    return [];
  }
};

export const createPost = async (postData) => {
  try {
    const response = await axios.post(`${BASE_URL}/boards`, postData);
    return response.data;
  } catch (error) {
    console.error('❌ 게시글 작성 실패:', error);
    return null;
  }
};
