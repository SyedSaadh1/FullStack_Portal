import { DefaultUser, getServerSession } from 'next-auth';
import { NAVIGATION } from './navigation.path';
import { NavigationMenu } from './navigation.types';

export default class NavigationController {
	static async getNavigation(): Promise<NavigationMenu[]> {
		const session = await getServerSession();
		if (session?.user) {
			return this.getUserNavigation(session?.user as DefaultUser);
		}
		return this.defaultUserNavigation();
	}

	static userDashboardNavigation() {
		return [NAVIGATION.DASHBOARD, NAVIGATION.PROFILE];
	}

	private static async defaultUserNavigation(): Promise<NavigationMenu[]> {
		return [NAVIGATION.PROGRAMS, NAVIGATION.COURSES];
	}

	private static async getUserNavigation(
		_: DefaultUser
	): Promise<NavigationMenu[]> {
		return [NAVIGATION.DASHBOARD, NAVIGATION.JOBS, NAVIGATION.INTERVIEW_PREP];
	}
}
