const CMS_ENDPOINT =
  process.env.CMS_ENDPOINT || 'http://cms.fullstack.institute';
const AUTH_HEADER = process.env.NEXTAUTH_SECRET || '';
const CMS_REST_ENDPOINT = `${CMS_ENDPOINT}/api/v1`;

const ENDPOINTS = {
	CMS_ENDPOINT,
	CMS_REST_ENDPOINT,
	AUTH_HEADER
};

export default ENDPOINTS;
