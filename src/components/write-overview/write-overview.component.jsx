import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { useHistory } from 'react-router-dom';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { WritePageContainer, CreateContent } from './write-overview.styles';

import ArticleCard from '../article-card/article-card.component';

import { createArticleUtil } from '../../api-utils/article/article.api-utils.js';

const useStyles = makeStyles((theme) => {
  return {
    createBtn: {
      border: '1px solid #785E6E !important',
      color: '#785E6E !important',
      width: '214px !important',
      height: '36px !important',
      boxSizing: 'border-box !important',
      borderRadius: '4px !important',
      padding: '1rem !important',
      marginTop: '2.3rem !important',
      font: 'normal normal 500 1.4rem/1.6rem Roboto !important',
      letterSpacing: '1.25px !important',
      textTransform: 'uppercase !important',
    },
  };
});

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

const WriteOverview = ({ currentUser, match }) => {
  const classes = useStyles();
  let history = useHistory();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCreateBtn = () => {
    createArticleUtil(currentUser._id, (articleCreateRes) => {
      history.push(
        `${match.path}/${currentUser.email}/${articleCreateRes.data.output._id}`
      );
    });
  };

  return (
    <div>
      <WritePageContainer>
        <CreateContent>Create and publish your content.</CreateContent>
        <Button
          variant="outlined"
          className={classes.createBtn}
          onClick={handleCreateBtn}
        >
          create a new content
        </Button>

        <Box sx={{ width: '100%', marginTop: '5.5rem' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange}>
              <Tab label="Published" {...a11yProps(0)} disableRipple />
              <Tab label="Drafts" {...a11yProps(1)} disableRipple />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            No article was published.
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </TabPanel>
        </Box>
      </WritePageContainer>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

export default connect(mapStateToProps)(WriteOverview);
