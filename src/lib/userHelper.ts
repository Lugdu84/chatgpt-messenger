import User from '@/models/User'

async function createUserFromGoogle(googleUser) {
  // Extract the email address from the Google user object
  const { email } = googleUser

  // Check if an user with the provided email address already exists
  const existingUser = await User.findOne({ email })

  if (existingUser) {
    // User already exists, return the existing user
    return existingUser
  }

  // User doesn't exist yet, create a new user using the provided email
  const newUser = await User.create({ email })

  return newUser
}

export default createUserFromGoogle
