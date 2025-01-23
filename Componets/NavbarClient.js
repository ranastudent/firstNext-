// components/NavbarClient.js
import React from 'react';
import Link from 'next/link';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export default async function NavbarClient() {
      const { getUser, isAuthenticated } = getKindeServerSession()
      const user = await getUser()
      console.log(user)
      return (
            <div className="navbar bg-base-100 flex mx-5">
                  <div className="flex-1">
                        <a className="btn btn-ghost normal-case text-xl">Logo</a>
                  </div>
                  <div className="flex-none">
                        <ul className="menu menu-horizontal p-0 flex space-x-6">
                              <li><Link href="/">Home</Link></li>
                              <li><Link href="/BlogPage">Blog Page</Link></li>
                              <li><Link href="/Profile">Profile</Link></li>
                              {(await isAuthenticated() ?
                                    <>
                                          <li><LogoutLink>LogOut</LogoutLink></li>
                                    </>
                                    :
                                    <>
                                          <li><LoginLink postLoginRedirectURL='/Profile'>Login</LoginLink></li>
                                          <li><RegisterLink postLoginRedirectURL='/Profile'>Register</RegisterLink></li>
                                    </>
                              )}



                        </ul>
                  </div>
            </div>
      );
}
