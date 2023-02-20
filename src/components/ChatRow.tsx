'use client'

import { collection, orderBy, query } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { HiChatBubbleLeftEllipsis, HiOutlineTrash } from 'react-icons/hi2'
import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../../firebase'

type Props = {
  id: string
}

function ChatRow({ id }: Props) {
  const pathname = usePathname()
  const router = useRouter()
  const { data: session } = useSession()
  const [active, setActive] = useState(false)

  // const [messages] = useCollection(
  //   query(
  //     collection(
  //       db,
  //       'users',
  //       session?.user?.email as string,
  //       'chats',
  //       id,
  //       'messages'
  //     ),
  //     orderBy('createdAt', 'asc')
  //   )
  // )
  return (
    <Link className="chatRow justify-center" href={`/chat/${id}`}>
      <HiChatBubbleLeftEllipsis size={20} />
      <p className="flex-1 hidden md:inline-flex truncate">New chat</p>
      <HiOutlineTrash className="text-gray-700 hover:text-red-700" size={20} />
    </Link>
  )
}

export default ChatRow
