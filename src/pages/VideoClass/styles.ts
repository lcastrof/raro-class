import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  width: 100%;
  margin-top: -4rem;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 75vw;
`;

export const ContainerRightBackSupport = styled.div`
  width: 100%;
`;

export const ContainerRight = styled.div`
  width: 25vw;
  height: 100vh;
  position: absolute;
  right: 0;

  color: white;
  font-size: 30px;
  background: rgb(50, 60, 90, 1);
  word-break: break-all;
  padding: 40px;
`;
