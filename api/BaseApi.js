import axios from 'axios';
import join from 'url-join'
// const productionURL = 'https://corpjurist.com/api/v1/';
const devURL = 'http://localhost:8000/api/';

export const service = axios.create({
	baseURL: devURL,
	headers: { 'content-type': 'application/json' }
});

axios.interceptors.request.use(async (config) => {
	const token = localStorage.getItem('access-token')
	if (token != null) {
	  config.headers = {
		'Content-Type': 'application/json',
		Authorization: 'Token ' + token
	  }
	}
	config.url = join(devURL, config.url)
	return config
  })
  
  export const serviceSetToken = axios