import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Shared/Layout';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgotPassword from './components/Auth/ForgotPassword';
import Dashboard from './components/Admin/Dashboard';
import UserManagement from './components/Admin/UserManagement';
import CompanyList from './components/Company/InsuranceCompany/CompanyList';
import CompanyDetails from './components/Company/InsuranceCompany/CompanyDetails';
import AddCompany from './components/Company/InsuranceCompany/AddCompany';
import EditCompany from './components/Company/InsuranceCompany/EditCompany';
import PoliceList from './components/Company/Police/PoliceList';
import PoliceDetails from './components/Company/Police/PoliceDetails';
import AddPolice from './components/Company/Police/AddPolice';
import EditPolice from './components/Company/Police/EditPolice';
import ShopList from './components/Company/RepairShop/ShopList';
import ShopDetails from './components/Company/RepairShop/ShopDetails';
import AddShop from './components/Company/RepairShop/AddShop';
import EditShop from './components/Company/RepairShop/EditShop';
import StoreList from './components/Company/SalesStore/StoreList';
import StoreDetails from './components/Company/SalesStore/StoreDetails';
import AddStore from './components/Company/SalesStore/AddStore';
import EditStore from './components/Company/SalesStore/EditStore';
import ClaimList from './components/Company/Claim/ClaimList';
import ClaimDetails from './components/Company/Claim/ClaimDetails';
import AddClaim from './components/Company/Claim/AddClaim';
import EditClaim from './components/Company/Claim/EditClaim';

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/companies" element={<CompanyList />} />
            <Route path="/admin/companies/:companyId" element={<CompanyDetails />} />
            <Route path="/admin/companies/add" element={<AddCompany />} />
            <Route path="/admin/companies/edit/:companyId" element={<EditCompany />} />
            <Route path="/admin/police" element={<PoliceList />} />
            <Route path="/admin/police/:policeId" element={<PoliceDetails />} />
            <Route path="/admin/police/add" element={<AddPolice />} />
            <Route path="/admin/police/edit/:policeId" element={<EditPolice />} />
            <Route path="/admin/repair-shops" element={<ShopList />} />
            <Route path="/admin/repair-shops/:repairShopId" element={<ShopDetails />} />
            <Route path="/admin/repair-shops/add" element={<AddShop />} />
            <Route path="/admin/repair-shops/edit/:repairShopId" element={<EditShop />} />
            <Route path="/admin/sales-stores" element={<StoreList />} />
            <Route path="/admin/sales-stores/:salesStoreId" element={<StoreDetails />} />
            <Route path="/admin/sales-stores/add" element={<AddStore />} />
            <Route path="/admin/sales-stores/edit/:salesStoreId" element={<EditStore />} />
            <Route path="/admin/claims" element={<ClaimList />} />
            <Route path="/admin/claims/:claimId" element={<ClaimDetails />} />
            <Route path="/admin/claims/add" element={<AddClaim />} />
            <Route path="/admin/claims/edit/:claimId" element={<EditClaim />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;