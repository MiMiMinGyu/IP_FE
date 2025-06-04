import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';

const getAuthHeaders = () => {
  const token = localStorage.getItem('accessToken');
  return token && token !== 'null' && token !== 'undefined'
    ? { Authorization: `Bearer ${token}` }
    : null;
};

const authGet = async (url) => {
  const headers = getAuthHeaders();
  try {
    const res = await axios.get(`${BASE_URL}${url}`, {
      headers: headers || {},
      withCredentials: true,
    });
    return res.data;
  } catch (err) {
    console.error(`❌ GET ${url} 실패:`, err);
    return null;
  }
};

export const fetchPosts = async (category) => {
  return authGet(`/boards/category/${category}`) || [];
};

export const createPost = async (postData) => {
  const headers = getAuthHeaders();
  if (!headers) {
    alert('로그인이 필요한 기능입니다.');
    return null;
  }

  try {
    const response = await axios.post(`${BASE_URL}/boards`, postData, {
      headers,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error('❌ 게시글 작성 실패:', error);
    return null;
  }
};

export const deletePost = async (postId) => {
  const headers = getAuthHeaders();
  if (!headers) {
    alert('로그인이 필요한 기능입니다.');
    return null;
  }

  try {
    const response = await axios.delete(`${BASE_URL}/boards/${postId}`, {
      headers,
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(`❌ 게시글(${postId}) 삭제 실패:`, error);
    return null;
  }
};

export const likePost = async (postId) => {
  const headers = getAuthHeaders();
  if (!headers) {
    alert('로그인이 필요한 기능입니다.');
    return null;
  }

  try {
    const response = await axios.post(
      `${BASE_URL}/boards/${postId}/like`,
      null,
      {
        headers,
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    const status = error?.response?.status;
    if (status === 409) {
      alert('이미 좋아요를 누르셨습니다.');
    } else if (status === 401) {
      alert('인증이 만료되었습니다. 다시 로그인해주세요.');
    } else {
      console.error('❌ 좋아요 실패:', error);
      alert('좋아요에 실패했습니다.');
    }
    return null;
  }
};