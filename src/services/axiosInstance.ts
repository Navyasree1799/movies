import axios from 'axios';
import apiConstants from '../constants/apiConstants';

const instance = axios.create({
  baseURL: apiConstants.baseUrl
});

export default instance;