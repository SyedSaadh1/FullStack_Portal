const CMS_ENDPOINT =
  process.env.CMS_ENDPOINT || 'https://cms.fullstack.institute';
const AI_ENDPOINT = process.env.AI_ENDPOINT || 'http://ai.fullstack.institute';
const AUTH_HEADER = process.env.NEXTAUTH_SECRET || '';
const CMS_REST_ENDPOINT = `${CMS_ENDPOINT}/api/v1`;

const USER_ROUTE_PATH = `${CMS_REST_ENDPOINT}/users`;

const ENDPOINTS = {
	CMS_ENDPOINT,
	CMS_REST_ENDPOINT,
	AUTH_HEADER,

	USER_ROUTE_PATH,

	AI_ENDPOINT,

	VIDEO_TO_TEXT: `${AI_ENDPOINT}/upload-video/`
};

export default ENDPOINTS;
