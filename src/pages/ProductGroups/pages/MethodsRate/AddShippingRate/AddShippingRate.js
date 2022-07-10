import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import {
  Box,
  Breadcrumbs,
  Button,
  Card,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TableTabRules from './TableTabRules/TableTabRules';

const AddShippingRate = () => {
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
      Add Shipping Rate
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
            Add Shipping Rate
          </Typography>
        </Box>

        <Box sx={{ mt: 5 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="subtitle2" gutterBottom component="div">
                Rate Type
              </Typography>

              <Typography variant="body2" gutterBottom sx={{ mt: 5 }}>
                Select a rate type to add.
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <TableTabRules />
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 5, display: 'flex', justifyContent: 'space-between' }}>
          <Button variant="outlined" color="error">
            Cancel
          </Button>

          <Button variant="contained" size="medium">
            Next
          </Button>
        </Box>
      </Stack>
    </Container>
  );
};

export default AddShippingRate;
