import React from 'react';
import clsx from 'clsx';
import {
  Button,
  Fade,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  makeStyles,
  OutlinedInput,
  TextField,
} from '@material-ui/core';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import { connect } from 'react-redux';

import {
  SIModalInnerRight,
  SignInText,
  TextFieldSection,
  PassField,
  ForgetPassLine,
  SignUpLink,
  DontHaveAccText,
  SocialBtnsList,
} from './signin.styles';
import axios from 'axios';
import { setCurrentUser } from '../../../redux/user/user.action';

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
    marginTop: '1.6rem',
  },
}));

const SignInForm = ({
  setShowLoginForm,
  closeDialog,
  setCurrentUser,
  close,
}) => {
  const classes = useStyles();

  const [email, setEmail] = React.useState('');
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

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && values.password) {
      axios
        .post('/api/local/login', {
          email,
          password: values.password,
        })
        .then(({ data }) => {
          setCurrentUser(data);
          closeDialog(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Fade in={true} timeout={1000}>
      <SIModalInnerRight>
        <SignInText>Login</SignInText>
        <TextFieldSection>
          <TextField
            className={classes.field}
            id="outlined-basic"
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
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={70}
            />
          </FormControl>
        </PassField>
        <ForgetPassLine>forget password?</ForgetPassLine>
        <Button
          className={classes.loginBtn}
          variant="contained"
          color="primary"
          onClick={handleLogin}
        >
          LOG IN
        </Button>
        <DontHaveAccText>
          Don’t have an account?{' '}
          <SignUpLink onClick={() => setShowLoginForm(false)}>
            SIGN UP
          </SignUpLink>
        </DontHaveAccText>
        <SocialBtnsList>
          <div>
            <Button
              className={classes.GoogleBtn}
              variant="outlined"
              color="primary"
            >
              Continue with Google
            </Button>
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
      </SIModalInnerRight>
    </Fade>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(SignInForm);
