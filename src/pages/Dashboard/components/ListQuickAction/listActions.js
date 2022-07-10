import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SyncIcon from '@mui/icons-material/Sync';
import AssignmentIcon from '@mui/icons-material/Assignment';

const listActions = [
  {
    icon: <CategoryIcon />,
    url: '/product-groups',
    page: 'Product Groups',
    description: 'Group products to set rules.',
  },
  {
    icon: <AttachMoneyIcon />,
    url: '/blended-rates',
    page: 'Blended Rates',
    description:
      'When there are multiple product groups in an order, the combined ratio is displayed.',
  },
  {
    icon: <SyncIcon />,
    url: '/sync',
    page: 'Sync',
    description:
      "View and Sync the shipping zones that are set-up within the first location section of your shop's Default Shipping Profile.",
  },
  {
    icon: <AssignmentIcon />,
    url: '/document',
    page: 'Document',
    description: 'Instructions for installing and using application',
  },
];

export default listActions;
