import styled from 'styled-components';

export const WelcomeArticle = styled.div`
  width: 100%;
  height: calc(100vh - 6.5rem);
  background-color: #ffffff;
  padding: 20.9rem 0 0 0;
`;

export const WelcomeLine = styled.p`
  font: normal normal 400 11rem/12.9rem Roboto;
  color: #000000;
  text-align: center;
  // responsive
  @media screen and (max-width: 992px) {
    font: normal normal 400 8rem/12.9rem Roboto;
  }
`;

export const ArtLine = styled.div`
  font: normal normal 400 7.6rem/13.3rem Pacifico;
  color: #785e6e;
  text-align: center;
  // responsive
  @media screen and (max-width: 992px) {
    font: normal normal 400 4.6rem/13.3rem Pacifico;
  }
`;

export const ExploreButton = styled.div`
  width: 22.8rem;
  height: 4.8rem;
  padding: 1.5rem 0;
  background: rgba(120, 94, 110, 0.2);
  color: #785e6e;
  border: 1px solid #785e6e;
  border-radius: 0.4rem;
  text-align: center;
  margin: 4rem auto 0 auto;
  font: normal normal 600 1.5rem/1.88rem Roboto;
`;

export const SubHeading = styled.p`
  font: normal normal 900 3.6rem/4.21rem Roboto;
  color: #785e6e;
`;

export const CardListItemLG = styled.div`
  justify-content: space-between;
  margin: 6.2rem 0 12.2rem 0;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const CardListItemMD = styled.div`
  justify-content: space-between;
  margin: 6.2rem 0 12.2rem 0;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;

export const CardListItemSM = styled.div`
  justify-content: space-between;
  margin: 6.2rem 4rem 12.2rem 0;
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 3.2rem;
  @media only screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;
