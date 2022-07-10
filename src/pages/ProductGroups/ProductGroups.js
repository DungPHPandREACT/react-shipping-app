import React from 'react';
import Container from '@mui/material/Container';
import { Alert, Box, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './product-groups.scss';
import TableMyProducts from './components/TableMyProducts/TableMyProducts';

const ProductGroups = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className="product-group">
      <Stack spacing={3}>
        <Box className="product-group-banner">
          <Alert variant="outlined" severity="info">
            <Typography variant="body2" gutterBottom>
              When there is a single product group in an order, whatever rates
              you've added to each group will show. When there are multiple
              product groups in an order{' '}
              <Link to="/blended-rates">Blended Rates</Link> will show instead.
            </Typography>
          </Alert>
        </Box>
        <Box className="product-group-banner">
          <Stack>
            <Typography variant="subtitle2" gutterBottom component="div">
              My Products
            </Typography>

            <TableMyProducts />
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default ProductGroups;
