const Police = require('../models/Police');

const getAllPolice = async (req, res) => {
  try {
    const police = await Police.find();
    res.json(police);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createPolice = async (req, res) => {
  try {
    const { name, address } = req.body;

    const newPolice = new Police({
      name,
      address,
    });

    await newPolice.save();

    res.json({
      message: 'Police created successfully',
      police: newPolice,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updatePolice = async (req, res) => {
  try {
    const policeId = req.params.policeId;
    const { name, address } = req.body;

    const police = await Police.findByIdAndUpdate(
      policeId,
      { name, address },
      { new: true } // Return the updated document
    );

    if (!police) {
      return res.status(404).json({ error: 'Police not found' });
    }

    res.json({
      message: 'Police updated successfully',
      police,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deletePolice = async (req, res) => {
  try {
    const policeId = req.params.policeId;

    const police = await Police.findByIdAndDelete(policeId);
    if (!police) {
      return res.status(404).json({ error: 'Police not found' });
    }

    res.json({ message: 'Police deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllPolice,
  createPolice,
  updatePolice,
  deletePolice,
};