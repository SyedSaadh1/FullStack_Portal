import { makeStyles, Body1, shorthands } from '@fluentui/react-components';
import { Card, CardFooter, CardPreview } from '@fluentui/react-components';

const useStyles = makeStyles({
	card: {
		...shorthands.margin('auto'),
		maxWidth: '100%'
	}
});

interface ChallengeCardProps {
  title: string;
  url: string;
  img: string;
}

const ChallengeCard = ({ title, img }: ChallengeCardProps) => {
	const styles = useStyles();

	return (
		<Card className={styles.card}>
			<CardPreview>
				<img
					src={`https://mir-s3-cdn-cf.behance.net/projects${img}`}
					alt={title}
				/>
			</CardPreview>

			<CardFooter>
				<Body1>
					<b>{title}</b>
				</Body1>
			</CardFooter>
		</Card>
	);
};

export default ChallengeCard;
