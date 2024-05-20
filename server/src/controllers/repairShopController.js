const RepairShop = require('../models/RepairShop');

const getAllRepairShops = async (req, res) => {
  try {
    const repairShops = await RepairShop.find();
    res.json(repairShops);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createRepairShop = async (req, res) => {
  try {
    const { name, address } = req.body;

    const newRepairShop = new RepairShop({
      name,
      address,
    });

    await newRepairShop.save();

    res.json({
      message: 'Repair Shop created successfully',
      repairShop: newRepairShop,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateRepairShop = async (req, res) => {
  try {
    const repairShopId = req.params.repairShopId;
    const { name, address } = req.body;

    const repairShop = await RepairShop.findByIdAndUpdate(
      repairShopId,
      { name, address },
      { new: true } // Return the updated document
    );

    if (!repairShop) {
      return res.status(404).json({ error: 'Repair Shop not found' });
    }

    res.json({
      message: 'Repair Shop updated successfully',
      repairShop,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteRepairShop = async (req, res) => {
  try {
    const repairShopId = req.params.repairShopId;

    const repairShop = await RepairShop.findByIdAndDelete(repairShopId);
    if (!repairShop) {
      return res.status(404).json({ error: 'Repair Shop not found' });
    }

    res.json({ message: 'Repair Shop deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllRepairShops,
  createRepairShop,
  updateRepairShop,
  deleteRepairShop,
};