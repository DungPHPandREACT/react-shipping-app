import { Card, Stack, Typography } from '@mui/material';
import React from 'react';
import CategoryIcon from '@mui/icons-material/Category';
import { NavLink } from 'react-router-dom';

const QuickAction = ({ url, icon, page, description }) => {
  return (
    <Card variant="outlined" className="quick-action">
      <NavLink to={url}>
        <Stack direction="row">
          {icon}

          <Stack>
            <Typography variant="subtitle2" gutterBottom component="div">
              {page}
            </Typography>

            <Typography variant="body2" gutterBottom>
              {description}
            </Typography>
          </Stack>
        </Stack>
      </NavLink>
    </Card>
  );
};

export default QuickAction;
