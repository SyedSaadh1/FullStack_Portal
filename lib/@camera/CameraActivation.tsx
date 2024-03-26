'use client';
import React, { useState } from 'react';
import { UserIcon as CameraIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import PermissionErrorGuide from './PermissionErrorGuide';
import VideoCapture from './VideoCapture';
import { DefaultUser } from 'next-auth';
import axios from 'axios';
import { useSession } from 'next-auth/react';

const PERMISSION = {
	DENIED: 'denied',
	ENABLED: 'enabled'
};

interface CameraActivationProps {
  user: DefaultUser;
}

const CameraActivation = ({ user }: CameraActivationProps) => {
	const [permissionStatus, setPermissionStatus] = useState('default');
	const [isSubmitting, setIsSubmitting] = useState(false);
	// const [recordedText, setRecordedText] = useState<string | null>(null);

	const activateCamera = async () => {
		try {
			const stream = await navigator.mediaDevices.getUserMedia({
				video: true,
				audio: true
			});
			stream.getTracks().forEach(function (track) {
				track.stop();
			});
			setPermissionStatus(PERMISSION.ENABLED);
		} catch (err: any) {
			console.log(err);
			setPermissionStatus(PERMISSION.DENIED);
		}
	};
	const userSession = useSession();
	const onSubmit = async ({ video, audio }: { video: File; audio: File }) => {
		try {
			setIsSubmitting(true);
			const form = new FormData();
			form.append('video', video);
			form.append('audio', audio);
			form.append('userId', userSession?.data?.user?.id as string);
			const response = await axios.post('/api/self-intro', form);
			console.log(response.data);
		} catch (error) {
			setIsSubmitting(false);
		}
	};

	if (permissionStatus === PERMISSION.DENIED) {
		return <PermissionErrorGuide />;
	}

	if (permissionStatus === PERMISSION.ENABLED) {
		return (
			<VideoCapture
				title={user?.name}
				onSubmit={onSubmit}
				isSubmitting={isSubmitting}
			/>
		);
	}

	return (
		<div className="flex flex-col mx-auto items-center justify-center p-4">
			<div className="p-12 bg-slate-200 rounded-xl mb-4 border shadow-inner">
				<CameraIcon className="w-36 text-slate-400" />
			</div>
			<h2 className="text-lg font-semibold mb-2">Ready for Your Close-Up?</h2>
			<p className="mb-4 text-center">
        Activate your camera to record your personal introduction.
			</p>
			<Button onClick={activateCamera}>Activate Camera</Button>
		</div>
	);
};

export default CameraActivation;
