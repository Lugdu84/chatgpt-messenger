import mongoose, { Schema } from 'mongoose'

const messageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    chat: {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
      onDelete: 'CASCADE',
      required: true,
    },
  },
  { timestamps: true }
)

export interface IMessage {
  _id: string
  name: string
}

const Message =
  mongoose.models.Message || mongoose.model('Message', messageSchema)

export default Message
