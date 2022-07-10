import { Avatar, Box, Button, Divider, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProductGroup.scss';
import { useNavigate } from 'react-router-dom';

const ProductGroup = () => {
  let navigate = useNavigate();
  const handleRedirectPageAddRate = () => {
    navigate('method/add');
  };

  return (
    <Box>
      <div className="container-product">
        <div className="container-product__left">
          <Avatar
            alt="image product"
            className="product-image"
            variant="rounded"
            src="https://cdn.shopify.com/s/files/1/0068/6492/8839/products/pic2.png?v=1632473276"
          />
          <div className="product-info">
            <div className="product-info__label">
              <Typography
                variant="subtitle1"
                gutterBottom
                component="div"
                className="product-label"
              >
                Default
              </Typography>
              <Typography
                variant="caption"
                display="block"
                className="product-quantity"
                gutterBottom
              >
                0 Products
              </Typography>
            </div>
            <div className="product-info__manage">
              <NavLink to="/dashboard">Manage Products</NavLink>
            </div>
          </div>
        </div>
        <div className="container-product__right">
          <Button
            variant="contained"
            size="small"
            onClick={handleRedirectPageAddRate}
          >
            Add Rates
          </Button>
        </div>
      </div>
      <Divider />
    </Box>
  );
};

export default ProductGroup;
