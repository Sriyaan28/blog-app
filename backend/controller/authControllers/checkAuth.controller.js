import { UserModel } from '../../models/UserModel.js'

export const checkAuthController = async (req, res) => {
  try {
    const userId = req.user?.id

    if (!userId) {
      return res.status(401).json({ message: 'Unauthenticated' })
    }

    const user = await UserModel.findById(userId).select('-password')
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    return res.status(200).json({ payload: user })
  } catch (error) {
    console.error('checkAuthController error:', error)
    return res.status(500).json({ message: 'Internal server error' })
  }
}
