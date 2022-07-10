import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Badge,
  Box,
  Breadcrumbs,
  Button,
  Card,
  Container,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MethodsRate = () => {
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
      My Products
    </Typography>,
  ];

  return (
    <Container
      maxWidth="lg"
      sx={{ mt: 4, mb: 4 }}
      className="container-methods-rate"
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            {breadcrumbs}
          </Breadcrumbs>

          <Box sx={{ mt: 1 }}>
            <Typography variant="h6" gutterBottom component="div">
              My Products
            </Typography>
          </Box>
        </Stack>

        <Button variant="outlined" sx={{ height: '40px' }}>
          Manage Products
        </Button>
      </Stack>
      <Stack sx={{ mt: 2 }}>
        <Box sx={{ mt: 5 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="subtitle2" gutterBottom component="div">
              Domestic
            </Typography>

            <Link href="#" underline="none" sx={{ fontSize: '1em' }}>
              <Typography variant="caption" display="block" gutterBottom>
                Clone Rates
              </Typography>
            </Link>
          </Stack>

          <Card sx={{ mt: 2 }}>
            <Box
              sx={{
                padding: '16px',
              }}
              className="container-button-add-product-group"
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="medium"
                  className="btn-add-shipping-rate"
                >
                  + Add Shipping Rate
                </Button>

                <Badge
                  className="custom-badge-shipping-rate"
                  sx={{
                    width: '200px',
                    right: '60px',
                  }}
                  badgeContent={'Rate Failure Enabled'}
                  color="primary"
                ></Badge>
              </Stack>
            </Box>
          </Card>
        </Box>
      </Stack>
    </Container>
  );
};

export default MethodsRate;
