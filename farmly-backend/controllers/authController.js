// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// // JWT secret (in production, store this in environment variables)
// const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// // Signup controller
// exports.signup = async (req, res) => {
//   try {
//     const { name, email, password, location } = req.body;

//     // Ensure location is valid (it should be a string, and we can check for a valid location here)
//     if (!name || !email || !password || !location) {
//       return res.status(400).json({ msg: 'All fields are required' });
//     }

//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ msg: 'Email already in use' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 12);

//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//       location, // simple city name
//     });

//     await user.save();

//     res.status(201).json({ msg: 'Signup successful' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ msg: 'Server error during signup' });
//   }
// };


// // Login controller
// exports.login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.status(400).json({ msg: 'Email and password are required' });
//     }

//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: 'Invalid credentials' });
//     }

//     const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '7d' });

//     res.status(200).json({
//       token,
//       user: {
//         id: user._id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         location: user.location,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ msg: 'Server error during login' });
//   }
// };
