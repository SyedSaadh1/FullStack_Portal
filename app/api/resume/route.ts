import ResumeService from '@/modules/external/ai/ResumeService';
// import { uploadFile } from '@/adapters/aws/s3.adapater';
// import db from '@/db';
import { NextRequest, NextResponse } from 'next/server';

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

	const { introductions, resumeContent } =
    await ResumeService.generateSelfIntroductionFromResume(resume);
	// await db.userResume.create({
	// 	data: {
	// 		userId,
	// 		filePath: filename,
	// 		resumeContent: String(text)
	// 	}
	// });

	return Response.json({
		status: true,
		content: resumeContent,
		data: introductions
	});
}
