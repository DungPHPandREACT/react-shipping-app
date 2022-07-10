import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import React from 'react';

const ButtonAddProductGroup = () => {
  let navigate = useNavigate();

  const handleRedirectPageAddProductGroup = () => {
    navigate('./create');
  };

  return (
    <Box
      sx={{
        padding: '16px',
      }}
      className="container-button-add-product-group"
    >
      <Button
        variant="outlined"
        color="primary"
        size="medium"
        onClick={handleRedirectPageAddProductGroup}
      >
        + Add Product Group
      </Button>
    </Box>
  );
};

export default ButtonAddProductGroup;
