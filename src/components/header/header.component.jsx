import { useState } from 'react';

import { compose } from 'redux';
import { Link, useHistory, withRouter  } from 'react-router-dom';

import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';

import DialogComp from '../login-signup/dialog/dialog.component';

import UserImage from '../../assets/profile-imgs/user1.svg';

const useStyles = makeStyles((theme) => {
  console.log(theme);
  return {
    root: {
      flexGrow: 1,
    },
    Container: {},
    headerLeft: {
      display: 'flex',
      flexGrow: 1,
      gap: '2.5rem !important',
    },
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    title: {
      fontFamily: 'pacifico !important',
    },
    AppBar: {
      boxShadow: 'none !important',
      borderBottom: `1px solid ${theme.palette.line.main}`,
      [theme.breakpoints.down('sm')]: {
        padding: '0',
      },
    },
    Toolbar: {
      padding: '0 !important',
      [theme.breakpoints.down('sm')]: {},
    },
    brandName: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '.5rem !important',
      },
    },
    navLinks: {
      display: 'flex',
      gap: '2.5rem !important',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    navLink: {
      paddingTop: '.5rem !important',
      fontWeight: '400',
    },
    btnSignup: {
      boxShadow: 'none',
      '&:hover': {
        boxShadow: 'none',
      },
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    headerBtns: {
      display: 'flex',
      gap: '2rem !important',
      [theme.breakpoints.down('sm')]: {
        gap: '0 !important',
      },
    },
  };
});

const Header = ({ currentUser, match,...props }) => {
  console.log(currentUser);
  const classes = useStyles(props);
  const [loginForm, setLoginForm] = useState(true);
  const [authDialog, setauthDialog] = useState(false);
  let history = useHistory();

  const handleCloseAuthDialog = () => {
    setauthDialog(false);
  };
  const renderProfile =()=>{
    history.push(`/${currentUser.email}`)
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.AppBar} position="static" color="inherit">
        <Container className={classes.Container}>
          <Toolbar className={classes.Toolbar}>
            <div className={classes.headerLeft}>
              <div className={classes.menuButton}>
                <IconButton edge="start" color="inherit" aria-label="menu">
                  <MenuIcon />
                </IconButton>
              </div>
              <div className={classes.brandName}>
                <div>
                  <Link to="/">
                    <Typography variant="h5" className={classes.title}>
                      ArtGeeky
                    </Typography>
                  </Link>
                </div>
              </div>
              <div className={classes.navLinks}>
                <div>
                  <Link to="/catogories">
                    <Typography variant="h6" className={classes.navLink}>
                      Catogories
                    </Typography>
                  </Link>
                </div>
                <div>
                  <Link to="/write">
                    <Typography variant="h6" className={classes.navLink}>
                      Write
                    </Typography>
                  </Link>
                </div>
              </div>
            </div>
            {currentUser ? (
              <Avatar alt="Remy Sharp" src={UserImage} style={{cursor:"pointer"}} onClick = {renderProfile}/>
            ) : (
              <div className={classes.headerBtns}>
                <div>
                  <Button
                    color="primary"
                    onClick={() => {
                      setLoginForm(true);
                      setauthDialog(true);
                    }}
                  >
                    Sign in
                  </Button>
                </div>
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.btnSignup}
                    onClick={() => {
                      setLoginForm(false);
                      setauthDialog(true);
                    }}
                  >
                    Sign up
                  </Button>
                </div>
              </div>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <DialogComp
        open={authDialog}
        onClose={handleCloseAuthDialog}
        showLoginForm={loginForm}
        setShowLoginForm={setLoginForm}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default compose(withRouter,connect(mapStateToProps))(Header);
