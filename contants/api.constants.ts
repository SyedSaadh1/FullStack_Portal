const CMS_ENDPOINT = process.env.CMS_ENDPOINT || "http://139.59.18.121:3000";
const CMS_REST_ENDPOINT = `${CMS_ENDPOINT}/rest`;

const ENDPOINTS = {
  CMS_ENDPOINT,
  CMS_REST_ENDPOINT,
}

export default ENDPOINTS