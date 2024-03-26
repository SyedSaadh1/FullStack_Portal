/* eslint-disable no-undef */
import React, { useRef, useState, useCallback, useEffect } from 'react';
import Webcam from 'react-webcam';
import {
	downloadRecordVideo,
	generatePreviewAudioUrl,
	generatePreviewUrl
} from './camera.utils';
import { CAMERA_VIDEO_TYPE } from './camera.constants';

interface WebcamRecorderHook {
  capturing: boolean;
  recordedChunks: BlobPart[];
  recordedAudioChunks: BlobPart[];
  videoPreviewUrl: string | null;
  audioPreviewUrl: string | null;
  handleStartCaptureClick: () => void;
  handleStopCaptureClick: () => void;
  handleDownload: () => void;
  clearRecording: () => void;
}

const useWebcamRecorder = (
	webcamRef: React.RefObject<Webcam>
): WebcamRecorderHook => {
	const mediaRecorderRef = useRef<MediaRecorder | null>(null);
	const audioRecorderRef = useRef<MediaRecorder | null>(null);
	const [capturing, setCapturing] = useState(false);
	const [recordedChunks, setRecordedChunks] = useState<BlobPart[]>([]);
	const [recordedAudioChunks, setRecordedAudioChunks] = useState<BlobPart[]>(
		[]
	);
	const [videoPreviewUrl, setVideoPreviewUrl] = useState<string | null>(null);
	const [audioPreviewUrl, setAudioPreviewUrl] = useState<string | null>(null);

	useEffect(() => {
		if (recordedChunks.length) {
			const url = generatePreviewUrl(recordedChunks);
			setVideoPreviewUrl(url);

			return () => {
				URL.revokeObjectURL(url);
			};
		}
	}, [recordedChunks]);

	useEffect(() => {
		if (recordedAudioChunks.length) {
			const url = generatePreviewAudioUrl(recordedAudioChunks);
			setAudioPreviewUrl(url);

			return () => {
				URL.revokeObjectURL(url);
			};
		}
	}, [recordedAudioChunks]);

	const handleDataAvailable = useCallback(({ data }: BlobEvent) => {
		if (data.size > 0) {
			setRecordedChunks(prev => prev.concat(data));
		}
	}, []);

	const handleAudioDataAvailable = useCallback(({ data }: BlobEvent) => {
		if (data.size > 0) {
			setRecordedAudioChunks(prev => prev.concat(data));
		}
	}, []);

	const handleStartCaptureClick = useCallback(() => {
		setCapturing(true);
		mediaRecorderRef.current = new MediaRecorder(
      webcamRef?.current?.stream as MediaStream,
      {
      	mimeType: CAMERA_VIDEO_TYPE
      }
		);

		// Create an audio context.
		const audioContext = new AudioContext();
		// Create an audio source node from the microphone.
		const microphoneSource = audioContext.createMediaStreamSource(
      webcamRef?.current?.stream as MediaStream
		);
		// Create a destination node.
		const destinationNode = audioContext.createMediaStreamDestination();
		// Connect the microphone source to the destination node.
		microphoneSource.connect(destinationNode);
		// Create a MediaRecorder object to record the audio stream.
		audioRecorderRef.current = new MediaRecorder(destinationNode.stream);

		// Start recording.
		audioRecorderRef.current.start();
		audioRecorderRef.current.addEventListener(
			'dataavailable',
			handleAudioDataAvailable
		);

		mediaRecorderRef.current.addEventListener(
			'dataavailable',
			handleDataAvailable
		);
		mediaRecorderRef.current.start();
	}, [webcamRef, handleDataAvailable, handleAudioDataAvailable]);

	const handleStopCaptureClick = useCallback(() => {
		mediaRecorderRef.current?.stop();
		audioRecorderRef.current?.stop();
		setCapturing(false);
	}, []);

	const handleDownload = useCallback(() => {
		if (recordedChunks.length) {
			downloadRecordVideo(recordedChunks);
			setRecordedChunks([]);
		}
	}, [recordedChunks]);

	const clearRecording = () => {
		setCapturing(false);
		setRecordedChunks([]);
		setRecordedAudioChunks([]);
		setVideoPreviewUrl(null);
		setAudioPreviewUrl(null);
	};

	return {
		capturing,
		videoPreviewUrl,
		audioPreviewUrl,
		recordedAudioChunks,
		recordedChunks,
		handleStartCaptureClick,
		handleStopCaptureClick,
		handleDownload,
		clearRecording
	};
};

export default useWebcamRecorder;
