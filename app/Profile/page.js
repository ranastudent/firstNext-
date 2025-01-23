"use client"

import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import { redirect } from "next/navigation"

const Profile = () => {
  const { isAuthenticated, isLoading, getUser } = useKindeBrowserClient()
  const user = getUser()
  if (isLoading) {
    return <h2>Loading....</h2>
  }
  if (!isAuthenticated)
    redirect("api/auth/login")
  return <div>
    <h2>Welcome {user?.given_name}</h2>
    <h2>User email:{user?.email} </h2>
  </div>
}

export default Profile;