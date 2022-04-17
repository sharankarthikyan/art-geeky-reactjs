import styled from 'styled-components';

export const CardOuterContainer = styled.div`
  width: 30rem;
  height: 15.8rem;
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 2.5rem;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;
  position: relative;
  z-index: 1;

  &:hover {
    border: 1px solid rgba(0, 0, 0, 1);
  }

  &:hover::after {
    opacity: 1;
  }
`;


export const Image = styled.div`
  width: 27rem;
  height: 15.8rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.img});
`;

export const CardContentCon = styled.div`
  padding: 1rem;
`;

export const CardTitle = styled.div`
  font-family: 'Playfair-Display-Regular', serif;
  color: #000000;
  font-size: 2rem;
  line-height: 2.4rem;
  letter-spacing: 0.18px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  margin-bottom: 1.6rem;
`;