import {
  ExploreTitle,
  ExploreSubtitle,
  ExploreHighlightedSubtitle,
  CardListItemLG,
  CardListItemMD,
  CardListItemSM,
} from './explore-overview.styles';

import MDcard from '../card-md/card-md.component';
import SMcard from '../card-sm/card-sm.component';
import LGcard from '../card-lg/card-lg.component';

const ExporeOverview = () => {
  const getLGcard = () => {
    return [1, 2].map(() => {
      return <LGcard />;
    });
  };

  const getMDcard = () => {
    return [1, 2, 3, 4, 5, 6].map(() => {
      return <MDcard />;
    });
  };
  const getSMcard = () => {
    return [1, 2, 3, 4, 5, 6].map(() => {
      return <SMcard />;
    });
  };
  return (
    <div>
      <ExploreTitle>
        <ExploreSubtitle>Explore</ExploreSubtitle>
        <ExploreHighlightedSubtitle>ArtGeeky</ExploreHighlightedSubtitle>
      </ExploreTitle>

      <CardListItemLG>{getLGcard()}</CardListItemLG>

      <CardListItemMD>{getMDcard()}</CardListItemMD>

      <CardListItemSM>{getSMcard()}</CardListItemSM>
    </div>
  );
};

export default ExporeOverview;
