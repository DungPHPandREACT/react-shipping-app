import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ListAppsRecommended from './components/ListApps/ListAppsRecommended';
import ListQuickAction from './components/ListQuickAction/ListQuickAction';
import QuickAction from './components/ListQuickAction/QuickAction/QuickAction';
import './dashboard.scss';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className="dashboard">
      <h3 className="dashboard-welcome">Welcome to Shipping App, shoptest!</h3>
      <Grid container spacing={5}>
        {/* Col left */}
        <Grid item xs={8}>
          <Stack spacing={3}>
            {/* Banner */}
            <div className="dashboard-banner">
              <img
                className="dashboard-banner__image"
                src="https://cdn.pagefly.io/static/images/temp/join-pf-community-banner.png"
                alt="Banner"
              />
            </div>

            {/* Quick actions */}
            <Card className="dashboard-quick-actions">
              <Box>
                <CardHeader title="Quick actions" component="h3" />
                <Divider />
                <CardContent>
                  <ListQuickAction />
                </CardContent>
              </Box>
            </Card>

            {/* Support */}
            <Card>
              <CardHeader title="Support" component="h3" />
              <Divider />
              <CardContent>
                <Grid container spacing={5}>
                  <Grid item xs={6}>
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={1}>
                        <ChatBubbleOutlineIcon />
                        <Typography
                          variant="subtitle2"
                          gutterBottom
                          component="div"
                        >
                          Start live chat
                        </Typography>
                      </Stack>
                      <Typography variant="body2" gutterBottom>
                        Talk to us directly via live chat to get help with your
                        question
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={6}>
                    <Stack spacing={1}>
                      <Stack direction="row" spacing={1}>
                        <HelpOutlineIcon />
                        <Typography
                          variant="subtitle2"
                          gutterBottom
                          component="div"
                        >
                          Visit Help Center
                        </Typography>
                      </Stack>
                      <Typography variant="body2" gutterBottom>
                        Find a solution for your problem with PageFly documents
                        and tutorials
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Recommended Shopify Apps */}
            <Card className="dashboard-recommend">
              <Box>
                <CardHeader title="Recommended Shopify Apps" component="h3" />
                <Divider />
                <CardContent>
                  <ListAppsRecommended />
                </CardContent>
              </Box>
            </Card>
          </Stack>
        </Grid>

        {/* Col right */}
        <Grid item xs={4}>
          <Card>
            <CardHeader
              title="What's New"
              component="h3"
              className="font-weight-bold"
            />
            <Divider />
            <CardContent>
              <Typography variant="subtitle1" component="h3">
                Version: 1.0.0
              </Typography>
              <Typography variant="overline" className="mt--1">
                July 08, 2022
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
