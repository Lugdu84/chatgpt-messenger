'use client'

import { collection, deleteDoc, doc } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
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

  const [messages] = useCollection(
    collection(
      db,
      'users',
      session?.user?.email as string,
      'chats',
      id,
      'messages'
    )
  )

  useEffect(() => {
    if (!pathname) return
    setActive(pathname.includes(id))
  }, [pathname])

  const removeChat = async () => {
    await deleteDoc(
      doc(db, 'users', session?.user?.email as string, 'chats', id)
    )
    router.replace('/')
  }

  return (
    <Link
      className={`chatRow justify-center ${active && 'bg-gray-700/50'}`}
      href={`/chat/${id}`}
    >
      <HiChatBubbleLeftEllipsis size={20} />
      <p className="flex-1 hidden md:inline-flex truncate">
        {messages?.docs[messages.docs.length - 1]?.data().text || 'New Chat'}
      </p>
      <HiOutlineTrash
        onClick={removeChat}
        className="text-gray-700 hover:text-red-700"
        size={20}
      />
    </Link>
  )
}

export default ChatRow
