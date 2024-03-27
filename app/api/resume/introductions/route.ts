import { anyscaleService } from '@/adapters/ai/anyscale.adapater';
import StringUtils from '@/utils/string.utls';
import { NextRequest, NextResponse } from 'next/server';

import { extractText, getDocumentProxy } from 'unpdf';

export async function POST(request: NextRequest) {
	const form = await request.formData();
	const resume = form.get('resume') as File;
	const userId = form.get('userId') as string;

	if (!userId) return NextResponse.json({ status: false }, { status: 403 });

	if (!resume) {
		return NextResponse.json(
			{ status: false, error: 'Resume file is required' },
			{ status: 400 }
		);
	}

	const arrayBuffer = await resume.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer);
	const pdf = await getDocumentProxy(new Uint8Array(buffer));

	// Extract text from PDF
	const { text } = await extractText(pdf, { mergePages: true });

	const content = await anyscaleService.generateResumeIntroductions(
    text as string
	);
	const data = StringUtils.getJSONArrayFromString(content + '')[0];

	return Response.json({
		status: true,
		content,
		data
	});
}
