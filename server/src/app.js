const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const insuranceCompanyRoutes = require('./routes/insuranceCompanyRoutes'); 
const policeRoutes = require('./routes/policeRoutes');
const repairShopRoutes = require('./routes/repairShopRoutes');
const salesStoreRoutes = require('./routes/salesStoreRoutes');
const claimRoutes = require('./routes/claimRoutes');
require('dotenv').config();

const app = express();

// Enable CORS
app.use(cors());
app.use(express.json());

// Connect to database
connectDB();

// Mount routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/insurance-companies', insuranceCompanyRoutes); 
app.use('/api/police', policeRoutes);
app.use('/api/repair-shops', repairShopRoutes);
app.use('/api/sales-stores', salesStoreRoutes);
app.use('/api/claims', claimRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});