import { Card, CardBody, CardFooter } from '@nextui-org/react';

interface ChallengeCardProps {
  title: string;
  url: string;
  img: string;
}

const ChallengeCard = ({ title, img }: ChallengeCardProps) => {
	return (
		<Card>
			<CardBody>
				<img
					src={`https://mir-s3-cdn-cf.behance.net/projects${img}`}
					alt={title}
				/>
			</CardBody>

			<CardFooter>
				<p>
					<b>{title}</b>
				</p>
			</CardFooter>
		</Card>
	);
};

export default ChallengeCard;
