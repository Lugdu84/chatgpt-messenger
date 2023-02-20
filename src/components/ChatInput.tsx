'use client'

import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { IoPaperPlaneOutline } from 'react-icons/io5'

type Props = {
  chatId: string
}

export default function ChatInput({ chatId }: Props) {
  const { data: session } = useSession()
  const [prompt, setPrompt] = useState('')
  return (
    <div className="bg-gray-700/50 text-gray-400 rounded-lg text-sm">
      <form className="p-5 space-x-5 flex">
        <input
          className="bg-transparent focus:outline-none flex-1 disabled:cursor-not-allowed disabled:text-gray-300"
          disabled={!session}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Tapez votre message ici..."
        />
        <button
          disabled={!prompt || !session}
          type="submit"
          className="bg-[#11A37F] hover:opacity-50 text-white font-bold px-4 py-2 rounded disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          <IoPaperPlaneOutline />
        </button>
      </form>
      <div>{/* ModelSelection */}</div>
    </div>
  )
}
