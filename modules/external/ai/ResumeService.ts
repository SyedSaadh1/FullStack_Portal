import StringUtils from '@/utils/string.utls';
import TextExtraction from './@utils/TextExtraction';
import { anyscaleAdapter } from './adapters/anyscale.adapater';

export default class ResumeService {
	static async extractTextFromResume(file: File) {
		const text = await TextExtraction.extractTextFromPDF(file);
		return text;
	}

	static async generateSelfIntroductionFromResume(file: File) {
		const resumeContent = await this.extractTextFromResume(file);
		if (resumeContent) {
			const genAiIntroductions =
        anyscaleAdapter.generateResumeIntroductions(resumeContent);
			const introductions = StringUtils.getJSONArrayFromString(
				genAiIntroductions + ''
			)[0];
			return {
				introductions,
				resumeContent
			};
		}

		return {};
	}
}
