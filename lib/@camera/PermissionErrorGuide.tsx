import { Button } from '@nextui-org/react';
import { VideoCameraSlashIcon } from '@heroicons/react/24/outline';

const PermissionErrorGuide = () => {
	return (
		<div className="flex gap-4 max-w-5xl mx-auto">
			<div className="p-8 bg-slate-200 rounded-xl mb-4 border shadow-inner flex-[1] flex justify-center items-center">
				<VideoCameraSlashIcon className="max-w-36 text-slate-400" />
			</div>
			<div className="p-4 flex-[3]">
				<h2 className="text-lg font-semibold text-red-500">
          Need Camera and Microphone Access
				</h2>
				<p className="mt-2">
          To proceed with the video recording, camera and microphone access is
          required. If you&apos;ve denied access, please follow the steps below
          to enable permissions:
				</p>

				<ol className="text-left mt-4 space-y-2">
					<li>
            1. Click the <strong>lock icon</strong> on the left side of the
            address bar.
					</li>
					<li>
            2. Find the <strong>Camera</strong> and <strong>Microphone</strong>{' '}
            settings.
					</li>
					<li>
            3. Change the settings to <strong>Allow</strong> for both camera and
            microphone.
					</li>
					<li>
            4. Close the settings menu and refresh the page to apply the
            changes.
					</li>
				</ol>

				<p className="mt-4">
          If you&apos;re still experiencing issues, it might be necessary to
          check your device&apos;s system settings to ensure your browser is
          granted access to the camera and microphone.
				</p>

				<div className="mt-6">
					<Button
						variant="destructive"
						onClick={() => window.location.reload()}
					>
            Refresh Page
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PermissionErrorGuide;
