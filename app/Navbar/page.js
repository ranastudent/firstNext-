// import React from 'react';
// import Link from 'next/link';
// import { LoginLink, LogoutLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
// import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

// export default async function Navbar() {
//   const { getUser, isAuthenticated } = await getKindeServerSession();
//   const user = getUser();
//   console.log(user);

//   return (
//     <div className="navbar bg-base-100 flex mx-5">
//       <div className="flex-1">
//         <a className="btn btn-ghost normal-case text-xl">Logo</a>
//       </div>
//       <div className="flex-none">
//         <ul className="menu menu-horizontal p-0 flex space-x-6">
//           <li><Link href="/">Home</Link></li>
//           <li><Link href="/BlogPage">Blog Page</Link></li>
//           <li><Link href="/Profile">Profile</Link></li>
//           {isAuthenticated ? (
//             <>
//               <li><a>{user.name}</a></li>
//               <li><LogoutLink>Sign Out</LogoutLink></li>
//             </>
//           ) : (
//             <>
//               <li><LoginLink>Sign in</LoginLink></li>
//               <li><RegisterLink>Sign up</RegisterLink></li>
//             </>
//           )}
//         </ul>
//       </div>
//     </div>
//   );
// }
