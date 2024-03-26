import type { User as IUser } from '@prisma/client';
import { User } from 'db/user';
import HttpService from './http.services';
import ENDPOINTS from '@/contants/api.constants';

class UserService extends HttpService {
	constructor() {
		super(`${ENDPOINTS.USER_ROUTE_PATH}`);
	}

	public async register({ email, name, id }: IUser) {
		try {
			const response = await this.post('/create', { name, email, id });
			const data = response.data;
			await User.updateExternalId(email, data?.user?.id);
			console.log(':: signIn ::', data);
		} catch (error) {
			console.log(':: signIn ERROR ::', error);
		}
	}
}

const userService = new UserService();

export default userService;
