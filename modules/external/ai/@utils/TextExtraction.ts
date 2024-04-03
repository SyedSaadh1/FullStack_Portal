import { extractText, getDocumentProxy } from 'unpdf';

export default class TextExtraction {
	static async extractTextFromPDF(file: File, mergePages = true) {
		try {
			const arrayBuffer = await file.arrayBuffer();
			const buffer = Buffer.from(arrayBuffer);
			const pdf = await getDocumentProxy(new Uint8Array(buffer));

			// Extract text from PDF
			const { text } = await extractText(pdf, { mergePages });
			return String(text);
		} catch (error) {
			console.log(error);
		}
	}
}
