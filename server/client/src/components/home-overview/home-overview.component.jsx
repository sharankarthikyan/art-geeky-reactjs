import { Link } from 'react-router-dom';

import {
  WelcomeArticle,
  WelcomeLine,
  ArtLine,
  ExploreButton,
  SubHeading,
  CardListItemMD,
  CardListItemSM,
} from './home-overview.styles';

import Quotes from '../quotes/quotes.component';
import MDcard from '../card-md/card-md.component';
import SMcard from '../card-sm/card-sm.component';

const HomeOverview = () => {
  const getMDcard = () => {
    return [1, 2, 3].map(() => {
      return <MDcard />;
    });
  };
  const getSMcard = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map(() => {
      return <SMcard />;
    });
  };
  const getQuotes = () => {
    return [1].map(() => {
      return <Quotes />;
    });
  };
  return (
    <div>
      <WelcomeArticle>
        <WelcomeLine>Welcome to</WelcomeLine>
        <ArtLine>artgeeky</ArtLine>
        <Link to="/explore">
          <ExploreButton>EXPLORE FOR FREE</ExploreButton>
        </Link>
      </WelcomeArticle>

      <SubHeading>Trending</SubHeading>
      <CardListItemMD>{getMDcard()}</CardListItemMD>

      <SubHeading>New Posts</SubHeading>
      <CardListItemSM>{getSMcard()}</CardListItemSM>

      <SubHeading>Quote Of The Day</SubHeading>
      <CardListItemSM>{getQuotes()}</CardListItemSM>
    </div>
  );
};

export default HomeOverview;
