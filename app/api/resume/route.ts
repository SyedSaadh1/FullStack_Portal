import { uploadFile } from '@/adapters/aws/s3.adapater';
import db from '@/db';
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

	const time = new Date().getTime();
	const filename = `resume-${time}.pdf`;
	await uploadFile(resume, `fullstack-institute/${userId}`, filename);

	const arrayBuffer = await resume.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer);
	const pdf = await getDocumentProxy(new Uint8Array(buffer));

	// Extract text from PDF
	const { text } = await extractText(pdf, { mergePages: true });

	await db.userResume.create({
		data: {
			userId,
			filePath: filename,
			resumeContent: String(text)
		}
	});

	return Response.json({
		status: true
	});
}
