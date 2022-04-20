import styled from 'styled-components';

export const Page = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;
`;

export const SideLeft = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: center;

  flex: 7;

  img {
    width: 100%;
    height: 100%;
    /* max-width: 150%; */
    /* max-height: 100%; */
  }
`;

export const SideRight = styled.main`
  flex: 8;

  padding: 0 32px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  height: 100%;
  max-width: 320px;
  margin: 10px;
  /* align-items: stretch;
  text-align: center; */
`;
