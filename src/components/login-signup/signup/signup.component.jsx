import React, { useState } from 'react';
import clsx from 'clsx';
import {
  Button,
  Fade,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import {
  SUModalInnerRight,
  SignUpText,
  TextFieldSection,
  PassField,
  HaveAccText,
  SignInLink,
  SocialBtnsList,
} from './signup.styles';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
    color: theme.palette.light.main,
    border: '1px solid ' + theme.palette.light.main,
  },
  MarTop16: {
    marginTop: '1.6rem !important',
  },
  MarTop24: {
    marginTop: '2.4rem !important',
  },
}));

const SignUpForm = ({ setShowLoginForm }) => {
  const classes = useStyles();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleSignup = () => {
    axios
      .post('/api/local/signup', {
        username,
        email,
        password: values.password,
      })
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Fade in={true} timeout={1000}>
      <SUModalInnerRight>
        <SignUpText>Create an account</SignUpText>
        <TextFieldSection>
          <div>
            <TextField
              className={classes.field}
              id="outlined-basic1"
              label="Name"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <TextField
            className={clsx(classes.field, classes.MarTop24)}
            id="outlined-basic2"
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </TextFieldSection>
        <PassField>
          <FormControl
            className={clsx(classes.margin, classes.textField)}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              className={classes.field}
              id="outlined-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </PassField>
        <Button
          className={clsx(classes.loginBtn, classes.MarTop24)}
          variant="contained"
          color="primary"
          onClick={handleSignup}
        >
          SIGN UP
        </Button>
        <HaveAccText>
          Already have an account?{' '}
          <SignInLink onClick={() => setShowLoginForm(true)}>
            SIGN IN
          </SignInLink>
        </HaveAccText>
        <SocialBtnsList>
          <div>
            <Link to="/api/auth/google">
              <Button
                className={classes.GoogleBtn}
                variant="outlined"
                color="primary"
              >
                Continue with Google
              </Button>
            </Link>
          </div>
          <div className={classes.MarTop16}>
            <Button
              className={classes.GoogleBtn}
              variant="outlined"
              color="primary"
            >
              Continue with Facebook
            </Button>
          </div>
          <div className={classes.MarTop16}>
            <Button
              className={classes.GoogleBtn}
              variant="outlined"
              color="primary"
            >
              Continue with Phone
            </Button>
          </div>
        </SocialBtnsList>
      </SUModalInnerRight>
    </Fade>
  );
};

export default SignUpForm;
