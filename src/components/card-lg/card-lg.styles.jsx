import styled from 'styled-components';

export const CardOuterContainer = styled.div`
  width: 100.2rem;
  height: 40rem;
  border-radius: 1.6rem 1.6rem 1.6rem 1.6rem;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  overflow: hidden;
  position: relative;
  z-index: 1;
  display: flex;
  margin: 0 0 3.2rem 0;

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
  width: 40rem;
  height: 40rem;
  background-color: #BCD1FF;
  cursor: pointer;
`;

export const CardContentCon = styled.div`
  padding: 3.2rem 3.5rem;
`;

export const CardContentL1 = styled.div`
  display: flex;
`;

export const CardCatTag = styled.div`
  text-transform: uppercase;
  font: normal normal 600 2rem/2.7rem Roboto, sans-serif;
  color: #6e798c;
`;

export const CardPostTime = styled.div`
  font: normal normal normal 1.8rem/2.5rem Roboto, sans-serif;
  color: #6e798c;
`;

export const CardContentL2 = styled.div`
  margin-top: 2.5rem;
`;

export const CardTitle = styled.div`
  font: normal normal 4rem/4.6rem DM Serif Display;
  color: #081f32;
`;

export const CardContentL3 = styled.div`
  margin-top: 1.5rem;
`;

export const CardDescrip = styled.div`
  font: normal normal normal 1.8rem/2.7rem Roboto, sans-serif;
  color: #374a59;
`;

export const CardContentL4 = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
`;

export const CardAuthor = styled.div`
  border-radius: 50%;
  display: flex;
  gap: 0.8rem;
`;

export const CardAuthorImage = styled.div`
  margin-top:0.5rem;
`;

export const CardAuthorName = styled.div`
  padding-top: 1rem;
  font: normal normal 600 1.8rem/2.451rem Roboto, sans-serif;
  color: #785e6e;
  cursor: pointer;
`;

export const CardReadMore = styled.div`
  font: normal normal 400 1.8rem/2.451rem Roboto, sans-serif;
  color: #785e6e;
  padding-top: 1rem;
  cursor: pointer;
`;
