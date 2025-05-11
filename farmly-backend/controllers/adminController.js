import User from '../models/User';

// GET all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // exclude password
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Server error while fetching users' });
  }
};

// PUT deactivate user
export const deactivateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.isActive = false;
    await user.save();
    res.json({ message: 'User deactivated' });
  } catch (error) {
    res.status(500).json({ message: 'Server error during deactivation' });
  }
};
