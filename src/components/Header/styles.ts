import styled, { css } from 'styled-components';

export const HeaderContainer = styled.header`
  height: 6.3rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;

  ${({ theme }) => css`
    box-shadow: ${theme.boxShadow.header};
    background-color: ${theme.colors.white};
    padding-inline: ${theme.spacing.huge};
    padding-block: ${theme.spacing.small};
  `}
`;

export const LogoImage = styled.img`
  height: 100%;
`;

export const LogoButton = styled.button`
  border: none;
  background: transparent;
  height: 100%;
`;
