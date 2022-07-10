import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from '@mui/material';
import { ruleBase, listRule } from './listRule';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TableTabRules = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Rule-based" {...a11yProps(0)} />
            <Tab label="UPS" {...a11yProps(1)} />
            <Tab label="FedEx" {...a11yProps(2)} />
            <Tab label="USPS" {...a11yProps(3)} />
            <Tab label="Canada Post" {...a11yProps(4)} />
            <Tab label="DHL" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
          >
            {ruleBase[0].contentTab.map(({ rule, description }, index) => {
              return (
                <Box key={index}>
                  <FormControlLabel
                    className="custom-form-control-label"
                    sx={{
                      alignItems: 'flex-start',
                    }}
                    value="female"
                    control={<Radio />}
                    label={
                      <div
                        className="custom-radio-label"
                        style={{ padding: '5px 0', marginTop: '2px' }}
                      >
                        <Typography
                          variant="subtitle1"
                          gutterBottom
                          component="div"
                        >
                          {rule}
                        </Typography>
                        <Typography
                          variant="caption"
                          display="block"
                          gutterBottom
                        >
                          {description}
                        </Typography>
                      </div>
                    }
                  />
                </Box>
              );
            })}
          </RadioGroup>
        </TabPanel>
        {listRule?.map(({ id, tab, contentTab }, index) => {
          return (
            <TabPanel value={value} index={id} key={index}>
              <Box>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  {contentTab.map(
                    ({ area, moreDescription, listMethod }, index) => {
                      return (
                        <Box spacing={5} sx={{ mb: 2 }} key={index}>
                          <FormControl>
                            <Typography
                              variant="subtitle2"
                              gutterBottom
                              component="div"
                            >
                              {area}
                            </Typography>
                            <Typography
                              variant="caption"
                              display="block"
                              gutterBottom
                            >
                              {moreDescription}
                            </Typography>

                            <RadioGroup
                              aria-labelledby="demo-radio-buttons-group-label"
                              defaultValue="female"
                              name="radio-buttons-group"
                            >
                              {listMethod?.map(({ method, time }, index) => {
                                return (
                                  <FormControlLabel
                                    key={index}
                                    value="female"
                                    control={<Radio />}
                                    label={
                                      <span
                                        className="css-1wniyei-MuiTypography-root"
                                        style={{
                                          display: 'flex',
                                          alignItems: 'baseline',
                                          marginTop: '8px',
                                        }}
                                      >
                                        {method}

                                        <span
                                          className="MuiTypography-root MuiTypography-caption MuiTypography-gutterBottom css-621s9d-MuiTypography-root"
                                          style={{ marginLeft: '5px' }}
                                        >
                                          {' ( '}
                                          {time}
                                          {' )'}
                                        </span>
                                      </span>
                                    }
                                  />
                                );
                              })}
                            </RadioGroup>
                          </FormControl>
                          <Divider />
                        </Box>
                      );
                    }
                  )}
                </RadioGroup>
              </Box>
            </TabPanel>
          );
        })}
      </Box>
    </Card>
  );
};

export default TableTabRules;
