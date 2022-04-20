import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  /* justify-content: space-between; */
  margin-bottom: 15px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */

  position: relative;
  left: 32px;
  color: hsla(242, 50%, 38%, 1);
`;

export const IconRight = styled.div`
  display: flex;
  align-items: center;

  position: relative;
  left: -32px;
  color: hsla(242, 50%, 38%, 1);
`;

export const Input = styled.input`
  width: 280px;
  height: 35px;
  padding-inline: 35px;

  border-radius: 40px;
  box-shadow: 0px 5px 10px rgba(173, 172, 172, 0.3);
  border: 1px solid #a8a8b3;

  text-align: center;
  justify-content: left;
`;
