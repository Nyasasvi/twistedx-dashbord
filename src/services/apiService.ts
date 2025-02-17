import axios from 'axios';

const api = axios.create({
  baseURL: '/services/rest/query/v1/suiteql',
  headers: {
    'Content-Type': 'application/json',
    Prefer: 'transient',
  },
});

export const fetchSuiteQLData = async (query: string) => {
  const response = await api.post('', { q: query });
  return response.data;
};

export default api;