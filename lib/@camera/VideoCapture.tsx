'use client';
/* eslint-disable no-undef */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button } from '@nextui-org/react';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import Container from '@/ui/layout/container';
import Webcam from 'react-webcam';
import useWebcamRecorder from './useWebcamRecorder';
import Title from '@/components/ui/text/Title';
import VideoPreview from './VideoPreview';
import CameraSetupInstructions from './CameraSetupInstructions';
import Title3 from '@/components/ui/text/Title3';
import { convertBlobIntoFile } from './camera.utils';
import { CAMERA_AUDIO_TYPE } from './camera.constants';

const AUDIO_CONSTRAINTS: MediaStreamConstraints['audio'] = {
	noiseSuppression: true,
	echoCancellation: true
};

const VIDEO_CONSTRAINTS: MediaStreamConstraints['video'] = {
	facingMode: 'user',
	width: { exact: 640 },
	height: { exact: 360 },
	frameRate: 24
};

interface VideoCaptureProps {
  title?: string | null | undefined;
  timer?: number;
  isSubmitting?: boolean;
  // eslint-disable-next-line no-unused-vars
  onSubmit?(payload: { video: File; audio: File }): void;
}

function VideoCapture({ title, isSubmitting, onSubmit }: VideoCaptureProps) {
	const [isCameraLoaded, setIsCameraLoaded] = useState(false);
	const [countdown, setCountdown] = useState(5);
	const [isCountingDown, setIsCountingDown] = useState(false);

	useEffect(() => {
		navigator.mediaDevices.enumerateDevices().then(console.log);
	}, []);

	const webcamRef = useRef<Webcam | null>(null);
	const {
		capturing,
		handleStartCaptureClick,
		handleStopCaptureClick,
		videoPreviewUrl,
		recordedChunks,
		recordedAudioChunks,
		clearRecording
	} = useWebcamRecorder(webcamRef);

	const onUserMedia = () => {
		setIsCameraLoaded(true);
	};

	const handleSubmit = useCallback(() => {
		if (recordedChunks.length && recordedAudioChunks.length) {
			const video = convertBlobIntoFile(recordedChunks) as File;
			const audio = convertBlobIntoFile(
				recordedAudioChunks,
				CAMERA_AUDIO_TYPE
			) as File;
			onSubmit && onSubmit({ audio, video });
		}
	}, [recordedChunks, recordedAudioChunks, onSubmit]);

	const handleRetake = useCallback(() => {
		setIsCameraLoaded(false);
		clearRecording();
	}, [clearRecording]);

	// Function to start the countdown
	const startCountdown = () => {
		setIsCountingDown(true);
		setCountdown(5); // Reset countdown
		const countdownInterval = setInterval(() => {
			setCountdown(prevCountdown => {
				if (prevCountdown > 1) return prevCountdown - 1;
				clearInterval(countdownInterval);
				setIsCountingDown(false);
				handleStartCaptureClick();
				return 0;
			});
		}, 1000);
	};

	if (videoPreviewUrl) {
		return (
			<Container className="py-4">
				<VideoPreview videoPreviewUrl={videoPreviewUrl} />;
				{/* {audioPreviewUrl && <audio controls src={audioPreviewUrl} />} */}
				<div className="flex gap-4 justify-center">
					<Button size="lg" onClick={handleRetake} variant="destructive">
            Retake
					</Button>
					<Button size="lg" onClick={handleSubmit} disabled={isSubmitting}>
            Submit
					</Button>
				</div>
			</Container>
		);
	}

	return (
		<Container className="py-4">
			<div className="flex gap-8 items-center">
				<Card className="max-w-screen-sm w-full mx-auto overflow-hidden">
					<div className="w-full min-h-[40vh] bg-slate-400 relative">
						<CardHeader className="bg-gradient-to-b from-gray-800 absolute top-0 left-0 w-full z-10">
							<p className="text-slate-200 text-shadow-sm shadow-gray-900">
								{title}
							</p>
						</CardHeader>

						<div className="w-full h-full relative">
							<Webcam
								className={`w-full h-full ${
									isCameraLoaded ? 'opacity-100' : 'opacity-0'
								}`}
								ref={webcamRef}
								videoConstraints={VIDEO_CONSTRAINTS}
								audioConstraints={AUDIO_CONSTRAINTS}
								onUserMedia={onUserMedia}
								audio
								muted
								mirrored
							/>

							{!isCameraLoaded && (
								<Title3 className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-shadow shadow-gray-900">
                  Camera is starting...
								</Title3>
							)}

							{isCountingDown && (
								<Title className="absolute bg-gradient-to-b from-gray-800 top-0 left-0 w-full h-full flex items-center justify-center text-white text-shadow shadow-gray-900">
									{countdown}
								</Title>
							)}
						</div>
						<CardFooter className="absolute bottom-0 left-0 w-full z-10 flex justify-center">
							{isCameraLoaded && (
								<>
									{!capturing && (
										<Button
											disabled={isCountingDown}
											onClick={startCountdown}
											size="lg"
										>
                      Start Recording
										</Button>
									)}
									{capturing && (
										<Button
											onClick={handleStopCaptureClick}
											size="lg"
											variant="destructive"
										>
                      Stop Recording
										</Button>
									)}
								</>
							)}
						</CardFooter>
					</div>
				</Card>
				<CameraSetupInstructions />
			</div>
		</Container>
	);
}

export default VideoCapture;
