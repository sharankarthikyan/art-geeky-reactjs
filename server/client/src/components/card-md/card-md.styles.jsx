import styled from 'styled-components';

export const CardOuterContainer = styled.div`
  width: 31.8rem;
  height: 40rem;
  border-radius: 1.6rem 1.6rem 1.6rem 1.6rem;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;
  position: relative;
  z-index: 1;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    transform: scale(1.001, 1.001);
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const CardImageCon = styled.div`
  position: relative;
  width: 100%;
  height: 16.8rem;
  border-radius: 1.6rem 1.6rem 0 0;
  cursor: pointer;
`;

export const CardContentCon = styled.div`
  padding: 1.5rem 2.4rem;
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

export const CardContentL3 = styled.div`
  margin-top: 0.2rem;
`;

export const CardDescrip = styled.div`
  font-style: normal;
  font-weight: normal;
  font-family: Roboto, sans-serif;
  font-size: 1.3rem;
  line-height: 1.9rem;
  color: #374a59;
`;

export const CardContentL4 = styled.div`
  margin-top: 1.4rem;
  display: flex;
  justify-content: space-between;
`;

export const CardAuthor = styled.div`
  border-radius: 50%;
  display: flex;
  gap: 0.8rem;
`;

export const CardAuthorName = styled.div`
  padding-top: 0.9rem;
  font-weight: 600;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #785e6e;
  cursor: pointer;
`;

export const CardReadMore = styled.div`
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.5rem;
  color: #785e6e;
  padding-top: 0.9rem;
  cursor: pointer;
`;
