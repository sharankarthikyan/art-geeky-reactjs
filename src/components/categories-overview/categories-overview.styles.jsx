import styled from 'styled-components';

export const SubHeading = styled.p`
  font: bold 2.6rem/3.2rem Roboto;
  color: #000000;
  margin-top: 7.4rem;
`;

export const CardListItemMD = styled.div`
  justify-content: space-between;
  margin: 4.5rem 0 12.2rem 0;
  padding: 0 2.5rem;
  display: flex;
  flex-wrap: wrap;
  @media only screen and (max-width: 768px) {
    justify-content: space-around;
  }
`;