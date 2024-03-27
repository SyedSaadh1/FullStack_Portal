import extractJsonFromString from './extract-json-from-string';

export default class StringUtils {
	static getJSONArrayFromString(jsonString: string = '') {
		return extractJsonFromString(jsonString);
	}
}
