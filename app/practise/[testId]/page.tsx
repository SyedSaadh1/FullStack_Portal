import challengesController from '@/controllers/challenges.controller';
import ChallengeContainer from '@/ui/practise/ChallengeContainer';
import { redirect } from 'next/navigation';

type Props = {
  params: { testId: string };
};

const Page = async ({ params: { testId } }: Props) => {
	const challenge = await challengesController.getById(testId);

	if (!challenge) return redirect('/practise');

	return <ChallengeContainer challenge={challenge} />;
};

export default Page;
