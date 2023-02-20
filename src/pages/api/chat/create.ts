import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/connectDb'
import Chat from '@/models/Chat'
import User from '@/models/User'

// eslint-disable-next-line consistent-return
export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()
  try {
    const { email } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }
    const newChat = await Chat.create({
      messages: [],
      user,
    })
    res.status(200).json(newChat)
  } catch (error) {
    res.status(500).json({ message: error })
  }
}
