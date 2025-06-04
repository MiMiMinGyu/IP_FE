import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

const getAuthHeaders = () => {
  const token = localStorage.getItem('accessToken');
  return token ? { Authorization: `Bearer ${token}` } : {};
};

export const fetchPosts = async (category) => {
  try {
    const token = localStorage.getItem('accessToken');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};

    const response = await axios.get(`${BASE_URL}/boards/category/${category}`, {
      headers,
    });
    
    return response.data;
  } catch (error) {
    console.error(`❌ 게시글(${category}) 불러오기 실패:`, error);
    return [];
  }
};

export const createPost = async (postData) => {
  try {
    const response = await axios.post(`${BASE_URL}/boards`, postData, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error('❌ 게시글 작성 실패:', error);
    return null;
  }
};

export const deletePost = async (postId) => {
  try {
    const response = await axios.delete(`${BASE_URL}/boards/${postId}`, {
      headers: getAuthHeaders(),
    });
    return response.data;
  } catch (error) {
    console.error(`❌ 게시글(${postId}) 삭제 실패:`, error);
    return null;
  }
};

export const likePost = async (postId) => {
  try {
    const res = await axios.post(`${BASE_URL}/boards/${postId}/like`, null, {
      headers: getAuthHeaders(),
    });
    return res.data; // likeCount가 포함되어 있어야 함
  } catch (error) {
    console.error('❌ 좋아요 실패:', error);
    return null;
  }
};


