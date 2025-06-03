import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:3000',
});

export const login = async (studentId, password) => {
  try {
    const response = await apiClient.post('/auth/login', {
      studentId,
      password,
    });

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || '로그인 요청 중 오류가 발생했습니다.',
    };
  }
};
