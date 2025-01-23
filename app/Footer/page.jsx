
import React from 'react';

export default async function Footer() {
 
  return (
    <div className="navbar bg-base-100 flex justify-center mx-5">
      <div className="flex-none">
        <ul className="menu menu-horizontal items-center p-0 flex space-x-6">
          <li><a>Home</a></li>
          <li><a>Blog</a></li>
          <li><a>Login</a></li>
          <li><a>Register</a></li>
        </ul>
      </div>
    </div>
  );
}
