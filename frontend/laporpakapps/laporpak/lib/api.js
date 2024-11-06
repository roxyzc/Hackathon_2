import axios from 'axios';


const API_URL = process.env.NEXT_PUBLIC_API_URL;


const api = axios.create({
  baseURL: API_URL,
});


export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export default api;
