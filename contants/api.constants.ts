const CMS_ENDPOINT =
  process.env.CMS_ENDPOINT || 'https://cms.fullstack.institute';
const AI_ENDPOINT = process.env.AI_ENDPOINT || 'http://ai.fullstack.institute';
const AUTH_HEADER = process.env.NEXTAUTH_SECRET || '';
const CMS_REST_ENDPOINT = `${CMS_ENDPOINT}/api/v1`;

const USER_ROUTE_PATH = `${CMS_REST_ENDPOINT}/users`;

const INTERNAL_API = '/api';

const ENDPOINTS = {
	CMS_ENDPOINT,
	CMS_REST_ENDPOINT,
	AUTH_HEADER,

	USER_ROUTE_PATH,

	AI_ENDPOINT,
	VIDEO_TO_TEXT: `${AI_ENDPOINT}/upload-video/`,

	INTERNAL_RESUME_UPLOAD: `${INTERNAL_API}/resume`,
	INTERNAL_RESUME_INTRODUCTIONS: `${INTERNAL_API}/resume/introductions`
};

export default ENDPOINTS;
