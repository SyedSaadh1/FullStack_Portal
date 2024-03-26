// import { User } from "db/user";
// import SessionService from "services/session.services";
// import type { IUser } from "types/user.types";

import { DefaultUser, getServerSession } from 'next-auth';

export class Controller {
	async getUser() {
		const session = await getServerSession();
		return session?.user as DefaultUser;
	}
}
