'use client'

import { collection, orderBy, query } from 'firebase/firestore'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../../firebase'
import ChatRow from './ChatRow'
import NewChat from './NewChat'

function SideBar() {
  const { data: session } = useSession()
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, 'users', session?.user?.email as string, 'chats'),
        orderBy('createdAt', 'asc')
      )
  )

  return (
    <div className="-p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* Newt Chat */}
          <NewChat />
          <div>{/* Model Selection */}</div>
          {/* Map through the ChatRows */}
          {chats?.docs.map((chat) => (
            <ChatRow key={chat.id} id={chat.id} />
          ))}
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
