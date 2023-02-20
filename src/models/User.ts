import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    chats: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Chat',
      },
    ],
  },
  { timestamps: true }
)

export interface IUser {
  _id: string
  email: string
}

const User = mongoose.models.User || mongoose.model('User', userSchema)

export default User
