import { uploadFile } from '@/adapters/aws/s3.adapater';
import ENDPOINTS from '@/contants/api.constants';
import db from '@/db';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
	const form = await request.formData();
	const video = form.get('video') as File;
	const audio = form.get('audio') as File;

	const userId = form.get('userId');
	if (!userId || userId === 'undefined')
		return NextResponse.json({ status: false }, { status: 403 });

	const payload = new FormData();
	payload.append('video_file', video);
	payload.append('audio_file', audio);

	const time = new Date().getTime();

	const videoFilename = `self-intro-video-${time}.webm`;
	const audioFilename = `self-intro-audio-${time}.mp3`;

	await uploadFile(video, `fullstack-institute/${userId}`, videoFilename);
	await uploadFile(audio, `fullstack-institute/${userId}`, audioFilename);

	const response = await axios.post(ENDPOINTS.VIDEO_TO_TEXT, payload, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	});

	const recordedTextContent = response.data?.transcript?.text as string;

	const record = await db.selfIntroduction.create({
		data: {
			userId: String(userId),
			video: videoFilename,
			audio: audioFilename,
			text: recordedTextContent
		}
	});

	return Response.json({
		status: true,
		record
	});
}
