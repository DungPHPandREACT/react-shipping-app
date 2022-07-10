import { Grid } from '@mui/material';
import React from 'react';
import listActions from './listActions';
import QuickAction from './QuickAction/QuickAction';

const ListQuickAction = () => {
  return (
    <Grid container spacing={5}>
      {listActions.map(({ url, icon, page, description }, index) => (
        <Grid item xs={6} key={index}>
          <QuickAction
            url={url}
            icon={icon}
            page={page}
            description={description}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListQuickAction;
