import styled from "styled-components";

export const CardOuterContainer = styled.div`
  width: 30rem;
  height: 40rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2.5rem;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;
  position: relative;
  z-index: 1;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 1);
    /* background:
    linear-gradient(#fff,#fff) padding-box,
    linear-gradient(125deg, #42E4A3, #A383E8) border-box; */
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const CardContentCon = styled.div`
  padding: 2rem 1.2rem 1.2rem 1.2rem;
`;

export const Image = styled.div`
  width: 30rem;
  height: 20rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.img});
`;

export const CardTitle = styled.div`
  font-family: "Playfair-Display", serif;
  color: #000000;
  font-size: 2.4rem;
  line-height: 2.4rem;
  letter-spacing: 0.18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

export const CardDescrip = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.6rem;
  letter-spacing: 0.4px;
  font-family: Roboto, sans-serif;
  color: #000000cc;
  margin: 1.8rem 0;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;
