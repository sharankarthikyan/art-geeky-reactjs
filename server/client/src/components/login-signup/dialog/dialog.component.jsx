import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Aside from '../aside/aside.component';
import SignInForm from '../signin/signin.component';
import SignUpForm from '../signup/signup.component';

import { SIModalInner } from './dialog.styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    width: '96rem',
    height: '68rem',
  },
  field: {
    width: '39.2rem',
  },
  loginBtn: {
    boxShadow: 'none',
    width: '39.2rem',
    height: '4.8rem',
    marginTop: '2.4rem',
    fontWeight: 500,
    fontSize: '1.4rem',
    lineHeight: '1.6rem',
    letterSpacing: '.025rem',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  GoogleBtn: {
    width: '39.2rem',
    height: '4.8rem',
  },
  MarTop16: {
    marginTop: '1.6rem',
  },
}));

const ResponsiveDialog = ({
  open,
  onClose,
  showLoginForm,
  setShowLoginForm,
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <div className={classes.paper}>
        <SIModalInner>
          <Aside />
          <div>
            {showLoginForm ? (
              <SignInForm
                setShowLoginForm={setShowLoginForm}
                closeDialog={onClose}
              />
            ) : (
              <SignUpForm setShowLoginForm={setShowLoginForm} />
            )}
          </div>
        </SIModalInner>
      </div>
    </Dialog>
  );
};

export default ResponsiveDialog;
