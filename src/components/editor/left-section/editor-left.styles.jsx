import styled from 'styled-components';

export const EditorLeftOuter = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
`;

export const EditorLeftBox = styled.div`
  width: 8rem;
  height: 12rem;
  background-color: rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 1rem;
  border-radius: 0.5rem;
`;

export const EditorLeftBoxInner = styled.div`
  padding: 1rem;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
