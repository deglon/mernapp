const User = require('../models/User');
const Role = require('../models/Role');
const InsuranceCompany = require('../models/InsuranceCompany'); 

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate('role company'); // Populate 'role' and 'company'
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { username, email, password, roleName, companyId } = req.body;

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' });
    }

    const role = await Role.findOne({ name: roleName });
    if (!role) {
      return res.status(400).json({ error: 'Invalid role' });
    }

    const company = await InsuranceCompany.findById(companyId); 
    if (!company) {
      return res.status(400).json({ error: 'Invalid company' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role: role._id,
      company: companyId 
    });

    await newUser.save();

    res.json({
      message: 'User created successfully',
      user: newUser,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { username, email, password, roleName, companyId } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Update user details
    user.username = username;
    user.email = email;

    if (password) {
      user.password = await bcrypt.hash(password, 10);
    }

    if (roleName) {
      const role = await Role.findOne({ name: roleName });
      if (!role) {
        return res.status(400).json({ error: 'Invalid role' });
      }
      user.role = role._id;
    }

    if (companyId) {
      const company = await InsuranceCompany.findById(companyId);
      if (!company) {
        return res.status(400).json({ error: 'Invalid company' });
      }
      user.company = companyId;
    }

    await user.save();

    res.json({
      message: 'User updated successfully',
      user,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getUsersByCompany = async (req, res) => {
  try {
    const companyId = req.params.companyId;
    const users = await User.find({ company: companyId }).populate('role company'); 
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUsersByCompany,
};