import axios from 'axios';

const api = axios.create();

api.defaults.baseURL = 'https://3.221.159.196:3320';

export default api;
