import { Card, CardMedia, Stack, Typography } from '@mui/material';
import React from 'react';

const AppRecommended = ({ image, name, description }) => {
  return (
    <Card variant="outlined" className="dashboard-recommend__app">
      <Stack>
        <Stack direction="row">
          <CardMedia
            component="img"
            sx={{ width: 60 }}
            image={image}
            alt={name}
          />

          <Typography variant="subtitle2" gutterBottom component="div">
            {name}
          </Typography>
        </Stack>

        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
      </Stack>
    </Card>
  );
};

export default AppRecommended;
