import styled from 'styled-components';

export const ExploreTitle = styled.div`
  display: flex;
  margin: 6.3rem 0;
`;

export const ExploreSubtitle = styled.div`
  font: normal normal 400 36px/63px Roboto;
  color: #000000;
`;

export const ExploreHighlightedSubtitle = styled.div`
  font: normal normal 400 36px/42px Pacifico;
  color: #785e6e;
  margin: 1rem 0 0 1rem;
`;

export const CardListItemLG = styled.div`
  justify-content: center;
  margin: 6.2rem 0 12.2rem 0;
  display: flex;
  flex-wrap: wrap;
`;

export const CardListItemMD = styled.div`
  justify-content: space-between;
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 3rem;
  @media only screen and (max-width: 768px) {
    justify-content: space-around;
    margin: -13rem 0 12.2rem 0;
  }
`;

export const CardListItemSM = styled.div`
  justify-content: space-between;
  margin: 6.2rem 4rem 12.2rem 0;
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 3rem;
  @media only screen and (max-width: 768px) {
    justify-content: space-around;
    margin: 6.2rem 0 12.2rem 0;
  }
`;
