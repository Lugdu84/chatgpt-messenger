import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/connectDb'
import Chat from '@/models/Chat'

// eslint-disable-next-line consistent-return
export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()
  try {
    const { userId } = req.body
    const chats = await Chat.findOne({ user: userId })
    if (!chats) {
      return res.status(404).json({ message: 'Utilisateur incorrect' })
    }
    res.status(200).json(chats)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
