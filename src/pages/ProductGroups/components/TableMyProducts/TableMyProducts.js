import { Box, Card, Typography } from '@mui/material';
import React from 'react';
import ButtonAddProductGroup from './ButtonAddProductGroup/ButtonAddProductGroup';
import ProductGroup from './ProductGroup/ProductGroup';

const TableMyProducts = () => {
  return (
    <Card>
      <ProductGroup />
      <ButtonAddProductGroup />
    </Card>
  );
};

export default TableMyProducts;
