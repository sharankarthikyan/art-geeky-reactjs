import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { WritePageContainer, CreateContent } from './write-overview.styles';

import ArticleCard from '../article-card/article-card.component';

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

const WriteOverview = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <WritePageContainer>
        <CreateContent>Create and publish your content.</CreateContent>
        <Button
          variant="outlined"
          style={{
            border: '1px solid #785E6E',
            color: '#785E6E',
            width: '214px',
            height: '36px',
            boxSizing: 'border-box',
            borderRadius: '4px',
            padding: '1rem',
            marginTop: '2.3rem',
            font: 'normal normal 500 1.4rem/1.6rem Roboto',
            letterSpacing: '1.25px',
            textTransform: 'uppercase',
          }}
        >
          create a new content
        </Button>

        <Box sx={{ width: '100%', marginTop: '5.5rem' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab
                label="Published"
                {...a11yProps(0)}
                sx={{ color: '#000000', opacity: '0.6' }}
              />
              <Tab label="Drafts" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
        </Box>
      </WritePageContainer>
    </div>
  );
};

export default WriteOverview;
