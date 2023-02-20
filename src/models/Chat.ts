import mongoose, { Schema } from 'mongoose'

const chatSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      onDelete: 'CASCADE',
      required: true,
    },
    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Messages',
      },
    ],
  },
  { timestamps: true }
)

export interface IChat {
  _id: string
}

const Chat = mongoose.models.Chat || mongoose.model('Chat', chatSchema)

export default Chat
