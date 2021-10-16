import styled from 'styled-components';

export const FooterRoot = styled.div`
  background-color: #f8f9fb;
  width: 100vw;
  min-height: 30rem;
  height: auto;
  border-top: 0.1rem solid rgba(33, 33, 33, 0.08);
`;

export const FooterBrandOut = styled.div`
  display: flex;
  justify-content: center;
`;

export const FooterBrandName = styled.div`
  margin-top: 5rem;
`;

export const FooterLinksOut = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 6.5rem;
`;

export const FooterLinksIn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50rem;
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 5rem;
  // responsive
  @media screen and (max-width: 992px) {
    display: block;
  }
`;

export const FooterI18n = styled.div`
  @media screen and (max-width: 992px) {
    margin-right: auto;
    margin-left: auto;
    width: fit-content;
  }
`;

export const FooterSocialLinksOut = styled.div`
  display: flex;
  justify-content: center;
  // responsive
  @media screen and (max-width: 992px) {
    margin-top: 1rem;
    padding-right: 0;
  }
`;

export const FooterSocialLinksIn = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20rem;
  // responsive
  @media screen and (max-width: 992px) {
    margin-top: 3rem;
    justify-content: space-around;
  }
`;

export const FooterCpyRights = styled.div`
  display: flex;
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.6);
  // responsive
  @media screen and (max-width: 992px) {
    margin-top: 3rem;
    justify-content: center;
  }
`;
