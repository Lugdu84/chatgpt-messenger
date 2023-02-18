'use client'

import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import NewChat from './NewChat'

function SideBar() {
  const { data: session } = useSession()
  return (
    <div className="-p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* Newt Chat */}
          <NewChat />
          <div>{/* Model Selection */}</div>
          {/* Map through the ChatRows */}
        </div>
      </div>
      {session && (
        <Image
          onClick={() => signOut()}
          src={session.user?.image ?? '/assets/user.png'}
          alt="photo de profil"
          width={50}
          height={50}
          className="rounded-full cursor-pointer h-12 w-12 mx-auto mb-2 hover:opacity-50"
        />
      )}
    </div>
  )
}

export default SideBar
