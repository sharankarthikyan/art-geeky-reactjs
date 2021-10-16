import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

import {
  FooterRoot,
  FooterBrandOut,
  FooterBrandName,
  FooterLinksOut,
  FooterLinksIn,
  FooterSocialLinksOut,
  FooterSocialLinksIn,
  FooterBottom,
  FooterI18n,
  FooterCpyRights,
} from './footer.styles';

import AutoComplete from '../autocomplete-field/autocomplete-field.component';

import TwitterIcon from '../../assets/social-media-icons/twitter.svg';
import GithubIcon from '../../assets/social-media-icons/github.svg';

const useStyles = makeStyles((theme) => ({
  brandName: {
    fontFamily: 'pacifico !important',
  },
  footerLinks: {
    fontSize: '1.2rem',
    color: theme.palette.light.main,
    cursor: 'pointer',
  },
  socialIcons: {
    width: '2.4rem',
    height: '2.4rem',
    color: 'black',
    cursor: 'pointer',
  },
  footerBottomBrandName: {
    fontFamily: 'pacifico',
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <FooterRoot>
      <Container>
        <FooterBrandOut>
          <FooterBrandName>
            <Typography variant="h5" className={classes.brandName}>
              ArtGeeky
            </Typography>
          </FooterBrandName>
        </FooterBrandOut>
        <FooterLinksOut>
          <FooterLinksIn>
            <Typography variant="body1" className={classes.footerLinks}>
              Terms of Service
            </Typography>
            <Typography variant="body1" className={classes.footerLinks}>
              Privacy Policy
            </Typography>
            <Typography variant="body1" className={classes.footerLinks}>
              Security
            </Typography>
            <Typography variant="body1" className={classes.footerLinks}>
              Our Story
            </Typography>
          </FooterLinksIn>
        </FooterLinksOut>
        <FooterBottom>
          <FooterI18n>
            <AutoComplete />
          </FooterI18n>
          <FooterSocialLinksOut>
            <FooterSocialLinksIn>
              <img src={TwitterIcon} alt="" className={classes.socialIcons} />
              <img src={GithubIcon} alt="" className={classes.socialIcons} />
            </FooterSocialLinksIn>
          </FooterSocialLinksOut>
          <FooterCpyRights>
            &copy; &nbsp;
            <div className={classes.footerBottomBrandName}>ArtGeeky.&nbsp;</div>
            All rights reserved.
          </FooterCpyRights>
        </FooterBottom>
      </Container>
    </FooterRoot>
  );
};

export default Footer;
