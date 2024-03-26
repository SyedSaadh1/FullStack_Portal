import UserController from '@/controllers/user.controller';
import CameraActivation from '@/lib/@camera/CameraActivation';
import Container from '@/ui/layout/container';
import { DefaultUser } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Page() {
	const user = await UserController.getUser();
	if (!user?.email) redirect('/');

	return (
		<div className="min-h-[50vh] py-8">
			<Container>
				<CameraActivation user={user as DefaultUser} />
			</Container>
		</div>
	);
}
