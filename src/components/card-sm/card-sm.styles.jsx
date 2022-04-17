import styled from 'styled-components';

export const CardOuterContainer = styled.div`
  width: 40rem;
  height: 12.8rem;
  border-radius: 1.6rem;
  display: flex;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.001, 1.001);
  }

  &:hover::after {
    opacity: 1;
  }

  @media screen and (max-width: 500px) {
    width: 36rem;
    height: auto;
  }
`;

export const CardImageCon = styled.div`
  position: relative;
  width: 12.8rem;
  height: 12.8rem;
  border-radius: 1.6rem 0 0 1.6rem;
`;

export const CardContentCon = styled.div`
  padding: 2.5rem 2rem;
  width: 27.2rem;
`;

export const CardContentL1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardCatTag = styled.div`
  text-transform: uppercase;
  font-family: Roboto, sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #6e798c;
`;

export const CardPostTime = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #6e798c;
`;

export const CardContentL2 = styled.div`
  margin-top: 1rem;
`;

export const CardTitle = styled.div`
  font-family: DM Serif Display;
  font-size: 2rem;
  line-height: 2.5rem;
  color: #081f32;
`;
