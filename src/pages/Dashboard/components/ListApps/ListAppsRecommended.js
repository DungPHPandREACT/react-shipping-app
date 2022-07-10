import { Grid } from '@mui/material';
import React from 'react';
import AppRecommended from './AppRecommended/AppRecommended';
import listApps from './listApps';

const ListAppsRecommended = () => {
  return (
    <Grid container spacing={5}>
      {listApps.map(({ image, name, description }, index) => (
        <Grid item xs={4} key={index}>
          <AppRecommended image={image} name={name} description={description} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ListAppsRecommended;
