import {
  Box,
  Breadcrumbs,
  Button,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TableProducts from './TableProducts/TableProducts';

const AddProductGroup = () => {
  let navigate = useNavigate();
  const handleRedirectPreviousSite = () => {
    navigate('../');
  };

  const breadcrumbs = [
    <Link
      className="cursor-pointer"
      underline="hover"
      key="1"
      color="text.primary"
      onClick={handleRedirectPreviousSite}
    >
      Product Groups
    </Link>,
    <Typography key="2" color="text.primary">
      Create
    </Typography>,
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
      <Stack sx={{ mt: 2 }}>
        <Box>
          <Typography variant="h6" gutterBottom component="div">
            Add Product Group
          </Typography>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Stack>
            <Typography variant="subtitle2" gutterBottom component="div">
              Product Group Label
            </Typography>

            <TextField
              id="standard-label"
              label="Label"
              type="label"
              variant="outlined"
              helperText="This label will not be seen by customers"
            />
          </Stack>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Stack>
            <Typography variant="subtitle2" gutterBottom component="div">
              Add Products
            </Typography>

            <TableProducts />
          </Stack>
        </Box>
        <Box>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={5}
            sx={{ mt: 5 }}
          >
            <Button variant="outlined" color="error">
              Cancel
            </Button>

            <Button variant="contained" size="small">
              Add Rates
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default AddProductGroup;
