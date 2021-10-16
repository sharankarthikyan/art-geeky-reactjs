import React from 'react';
import Modal from '@mui/material/Modal';

import { makeStyles } from '@mui/styles';

import Aside from '../aside/aside.component';
import SignInForm from '../signin/signin.component';
import SignUpForm from '../signup/signup.component';

import { SIModalInner } from './dialog.styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch !important',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: '#fff',
    width: '96rem !important',
    height: '68rem !important',
    overflowY: 'none !important',
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
  dialog: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const ResponsiveDialog = ({
  open,
  onClose,
  showLoginForm,
  setShowLoginForm,
}) => {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
      className={classes.dialog}
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
    </Modal>
  );
};

export default ResponsiveDialog;
