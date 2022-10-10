import React from "react";
import { Link } from "react-router-dom";

import {
  WelcomeArticle,
  WelcomeLine,
  ArtLine,
  ExploreButton,
  SubHeading,
  CardListItemMD,
  CardListItemSM,
  WelcomeContainer,
} from "./home-overview.styles";

import Quotes from "../quotes/quotes.component";
import MDcardV2 from "../card-md-v2/card-md-v2.component";
import Minicard from "../mini-card/mini-card.component";
import MDcard from "../card-md/card-md.component";
import SMcard from "../card-sm/card-sm.component";

const HomeOverview = () => {
  const getMDcardv2 = () => {
    return [1, 2, 3].map((_, index) => {
      return <MDcardV2 key={"Home_MDCard_" + index} />;
    });
  };
  const MiniCard = () => {
    return [1, 2, 3].map((_, index) => {
      return <Minicard key={"Home_MDCard_" + index} />;
    });
  };

  const getMDcard = () => {
    return [1, 2, 3].map((_, index) => {
      return <MDcard key={"Home_MDCard_" + index} />;
    });
  };
  const getSMcard = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => {
      return <SMcard key={"Home_SMCard_" + index} />;
    });
  };
  const getQuotes = () => {
    return [1].map((_, index) => {
      return <Quotes key={"Home_Quote" + index} />;
    });
  };
  return (
    <div>
      <WelcomeContainer>
        <WelcomeArticle>
          <WelcomeLine>Welcome to</WelcomeLine>
          <ArtLine>artgeeky</ArtLine>
          <Link to="/explore">
            <ExploreButton>EXPLORE FOR FREE</ExploreButton>
          </Link>
        </WelcomeArticle>
      </WelcomeContainer>

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