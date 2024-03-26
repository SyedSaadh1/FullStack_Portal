import { Controller } from './controller';

class UserController extends Controller {
	async isAdmin(): Promise<boolean> {
		return false;
	}
}

const controller = new UserController();
export default controller;
