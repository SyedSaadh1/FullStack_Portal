'use client';

import React from 'react';
import Login from './Login';
import AuthUserNav from './AuthUserNav';
import { DefaultUser } from 'next-auth';

const AuthUser = ({ user }: { user: DefaultUser | undefined }) => {
	if (!user) {
		return <Login />;
	}
	return <AuthUserNav user={user as DefaultUser} />;
};

export default AuthUser;
