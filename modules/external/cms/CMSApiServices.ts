import * as https from 'https';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import ENDPOINTS from './cms.endpoints';

const httpsAgent = new https.Agent({
	rejectUnauthorized: false
});

class CMSApiServices {
	baseUrl: string;
	http: AxiosInstance;

	constructor(baseUrl = '/') {
		this.baseUrl = baseUrl;
		this.http = axios.create({
			baseURL: baseUrl,
			headers: {
				timeout: 5000,
				'auth-token': ENDPOINTS.AUTH_HEADER
			},
			httpsAgent
		});
	}

	async get(url: string, config?: AxiosRequestConfig) {
		return this.http.get(url, config);
	}

	async post(url: string, data?: any, config?: AxiosRequestConfig) {
		return this.http.post(url, data, config);
	}
}

const cmsApiServices = new CMSApiServices(ENDPOINTS.CMS_REST_ENDPOINT);

export default cmsApiServices;
