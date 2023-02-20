import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { db } from '../../firebase'

function NewChat() {
  const { data: session } = useSession()
  const router = useRouter()
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, 'users', session?.user?.email as string, 'chats'),
      {
        messages: [],
        userId: session?.user?.email,
        createdAt: serverTimestamp(),
      }
    )
    router.push(`/chat/${doc.id}`)
  }
  return (
    <button
      type="button"
      onClick={createNewChat}
      className="chatRow border m-1"
    >
      <AiOutlinePlus size={16} />
      <p>New Chat</p>
    </button>
  )
}

export default NewChat
