// components/ServerNavbar.js
import React from 'react';
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarClient from '@/Componets/NavbarClient';

export default async function ServerNavbar() {
  const session = await getKindeServerSession();
  const isAuthenticated = session.isAuthenticated();
  const user = session.getUser();

  return <NavbarClient isAuthenticated={isAuthenticated} user={user} />;
}
