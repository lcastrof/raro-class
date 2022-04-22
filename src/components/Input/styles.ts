import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
  /* margin-top: 2.5rem; */

  svg:first-child {
    position: absolute;
    left: 13px;
    bottom: 9px;
    color: hsla(242, 50%, 38%, 1);
  }

  svg:last-child {
    position: absolute;
    left: 289px;
    top: 8px;
    color: hsla(242, 50%, 38%, 1);
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3.5rem;
  padding-inline: 3.5rem;

  border: 1px solid #a8a8b3;

  ${({ theme }) => css`
    font-family: ${theme.font.family.montserrat};
    border-radius: ${theme.border.radius.medium};
    box-shadow: ${theme.boxShadow.input};
  `}
`;
