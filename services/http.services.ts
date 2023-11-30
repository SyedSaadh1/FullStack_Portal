import * as https from "https";
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

export default class HttpService {

  baseUrl: string;
  http: AxiosInstance;

  constructor(baseUrl = '/') {
    this.baseUrl = baseUrl;
    console.log(":: BASE URL ::", this.baseUrl)
    this.http = axios.create({
      baseURL: baseUrl,
      headers: {
        timeout: 5000,
      },
      httpsAgent
    });
  }

  async get(url: string, config?: AxiosRequestConfig) {
    return this.http.get(url, config)
  }

  async post(url: string, data?: AxiosRequestConfig, config?: AxiosRequestConfig) {
    return this.http.post(url, data, config)
  }


}