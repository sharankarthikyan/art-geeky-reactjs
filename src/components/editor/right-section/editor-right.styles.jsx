import styled from 'styled-components';

export const EditorRightOuter = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

export const EditorRightBox = styled.div`
  width: 10rem;
  height: 12rem;
  background-color: rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 1rem;
  border-radius: 0.5rem;
`;

export const EditorRightBoxInner = styled.div`
  padding: 1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CharCount = styled.h2`
  color: rgba(0, 0, 0, 0.5);
`;
