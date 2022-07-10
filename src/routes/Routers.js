import React from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route } from 'react-router-dom';
import BlendedRates from '../pages/BlendedRates/BlendedRates';
import Dashboard from '../pages/Dashboard/Dashboard';
import Document from '../pages/Document/Document';
import Pricing from '../pages/Pricing/Pricing';
import AddProductGroup from '../pages/ProductGroups/pages/AddProductGroup/AddProductGroup';
import AddShippingRate from '../pages/ProductGroups/pages/MethodsRate/AddShippingRate/AddShippingRate';
import MethodsRate from '../pages/ProductGroups/pages/MethodsRate/MethodsRate';
import ProductGroups from '../pages/ProductGroups/ProductGroups';
import Settings from '../pages/Settings/Settings';
import Sync from '../pages/Sync/Sync';

const Routers = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Dashboard />} />
        <Route path="/product-groups">
          <Route path="create" element={<AddProductGroup />} />
          <Route path="methods" element={<MethodsRate />} />
          <Route path="method/add" element={<AddShippingRate />} />
          <Route index element={<ProductGroups />} />
        </Route>
        <Route path="/blended-rates" element={<BlendedRates />} />
        <Route path="/sync" element={<Sync />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/document" element={<Document />} />
      </Route>
    </Routes>
  );
};

export default Routers;
