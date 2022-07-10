import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import SyncIcon from '@mui/icons-material/Sync';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './AppFrame.css';

const dataMainListItems = [
  {
    icon: <DashboardIcon />,
    url: '/',
    page: 'Dashboard',
  },
  {
    icon: <CategoryIcon />,
    url: '/product-groups',
    page: 'Product Groups',
  },
  {
    icon: <AttachMoneyIcon />,
    url: '/blended-rates',
    page: 'Blended Rates',
  },
  {
    icon: <SyncIcon />,
    url: '/sync',
    page: 'Sync',
  },
];

export const mainListItems = (
  <React.Fragment>
    {dataMainListItems.map(({ icon, page, url }, index) => (
      <NavLink
        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-10hburv-MuiTypography-root custom-nav-link"
        to={url}
        key={index}
      >
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={page} />
        </ListItemButton>
      </NavLink>
    ))}
  </React.Fragment>
);

const dataSecondaryListItems = [
  {
    icon: <PriceChangeIcon />,
    url: '/pricing',
    page: 'Pricing',
  },
  {
    icon: <AssignmentIcon />,
    url: '/document',
    page: 'Document',
  },
];

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      OTHER
    </ListSubheader>
    {dataSecondaryListItems.map(({ icon, page, url }, index) => (
      <NavLink
        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-10hburv-MuiTypography-root custom-nav-link"
        to={url}
        key={index}
      >
        <ListItemButton>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={page} />
        </ListItemButton>
      </NavLink>
    ))}
  </React.Fragment>
);
