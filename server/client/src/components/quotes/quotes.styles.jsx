import styled from 'styled-components';

export const CardOuterContainer = styled.div`
  width: 44rem;
  height: 16rem;
  border-radius: 1.6rem;
  padding: 2.2rem;
  display: block;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:hover {
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    transform: scale(1.001, 1.001);
  }

  &:hover::after {
    opacity: 1;
  }
`;

export const CardDoubleQuotes = styled.div`
  position: relative;
  width: 2.7rem;
  height: 2rem;
`;

export const CardContentCon = styled.div`
  padding: 0.5rem 0;
  display: flex;
`;

export const CardContentBlock = styled.div`
  display: block;
  width: 33rem;
`;

export const QuotesDiv = styled.div`
  font: normal normal normal 1.2rem/2.7rem Roboto;
  color: #6e798c;
  padding: 0.5rem 0;
`;

export const QuotesAuthor = styled.div`
  font: normal normal 500 1.7rem/2.5rem Roboto;
  letter-spacing: 0.03em;
  color: #7f39fb;
`;

export const CardAvatar = styled.div`
  position: relative;
  width: 7.2rem;
  height: 9.8rem;
`;
