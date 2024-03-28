import { Card } from '@nextui-org/react';
import React from 'react';

interface Props {
  videoPreviewUrl: string;
}

function VideoPreview({ videoPreviewUrl }: Props) {
	return (
		<Card className="max-w-screen-sm mx-auto overflow-hidden">
			<video src={videoPreviewUrl} controls />
		</Card>
	);
}

export default VideoPreview;
