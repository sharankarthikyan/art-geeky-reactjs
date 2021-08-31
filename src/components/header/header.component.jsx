import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { useState } from 'react';

import TransitionsModal from '../signin/signin.component';

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
      gap: '2.5rem',
    },
    menuButton: {
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    title: {
      fontFamily: 'pacifico',
    },
    AppBar: {
      boxShadow: 'none',
      borderBottom: `1px solid ${theme.palette.line.main}`,
      [theme.breakpoints.down('sm')]: {
        padding: '0',
      },
    },
    Toolbar: {
      padding: 0,
      [theme.breakpoints.down('sm')]: {},
    },
    brandName: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '.5rem',
      },
    },
    navLinks: {
      display: 'flex',
      gap: '2.5rem',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    navLink: {
      paddingTop: '.5rem',
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
      gap: '2rem',
      [theme.breakpoints.down('sm')]: {
        gap: '0',
      },
    },
  };
});

const Header = (props) => {
  console.log(props);
  const classes = useStyles(props);
  const [showModal, setShowModal] = useState(false);

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
            <div className={classes.headerBtns}>
              <div>
                <Button color="primary" onClick={() => setShowModal(true)}>
                  Sign in
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.btnSignup}
                >
                  Sign up
                </Button>
              </div>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <TransitionsModal
        show={showModal}
        handleClose={() => setShowModal(false)}
      />
    </div>
  );
};

export default Header;
