const SalesStore = require('../models/SalesStore');

const getAllSalesStores = async (req, res) => {
  try {
    const salesStores = await SalesStore.find();
    res.json(salesStores);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createSalesStore = async (req, res) => {
  try {
    const { name, address } = req.body;

    const newSalesStore = new SalesStore({
      name,
      address,
    });

    await newSalesStore.save();

    res.json({
      message: 'Sales Store created successfully',
      salesStore: newSalesStore,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateSalesStore = async (req, res) => {
  try {
    const salesStoreId = req.params.salesStoreId;
    const { name, address } = req.body;

    const salesStore = await SalesStore.findByIdAndUpdate(
      salesStoreId,
      { name, address },
      { new: true } // Return the updated document
    );

    if (!salesStore) {
      return res.status(404).json({ error: 'Sales Store not found' });
    }

    res.json({
      message: 'Sales Store updated successfully',
      salesStore,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteSalesStore = async (req, res) => {
  try {
    const salesStoreId = req.params.salesStoreId;

    const salesStore = await SalesStore.findByIdAndDelete(salesStoreId);
    if (!salesStore) {
      return res.status(404).json({ error: 'Sales Store not found' });
    }

    res.json({ message: 'Sales Store deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllSalesStores,
  createSalesStore,
  updateSalesStore,
  deleteSalesStore,
};