'use client';

import React from 'react'
import Login from './Login';
import { useSession } from 'next-auth/react';
import AuthUserNav from './AuthUserNav';
import { DefaultUser } from 'next-auth';

type Props = {}

const AuthUser = (props: Props) => {
  const { data, status } = useSession()
  if (status === 'loading') {
    return <p>Loading...</p>
  }
  return (
    <div>
      {status === "authenticated" && data?.user ? <AuthUserNav user={data?.user as DefaultUser} /> : <Login />}
    </div>
  )
}

export default AuthUser