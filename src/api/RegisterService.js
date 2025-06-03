import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL || 'http://localhost:3000',
});

export const register = async (formData) => {
  try {
    const response = await apiClient.post('/auth/register', formData);

    return {
      success: true,
      data: response.data,
    };
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.message || '회원가입 요청 중 오류가 발생했습니다.',
    };
  }
};
