import styled, { css } from 'styled-components';

export const Container = styled.main`
  height: 100vh;

  ${({ theme }) => css`
    background: ${theme.colors.gradients.bgNotFoundPage};
  `}
`;

export const LogoImage = styled.img`
  width: 15%;
  margin: 4rem 0 0 4rem;
  position: absolute;
`;

export const BackgroundArt = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;

  background-attachment: scroll;
  background-position: bottom;
  background-repeat: no-repeat;
`;

export const WrapText = styled.section`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  h1 {
    /* ${({ theme }) => css`
      font-size: ${theme.font.sizes.giant};
    `} */
    font-size: 8vw;
  }

  h3 {
    letter-spacing: 0.2rem;
    font-size: 1.12vw;

    ${({ theme }) => css`
      /* font-size: ${theme.font.sizes.small}; */
      font-weight: ${theme.font.weight.light};
    `}
  }

  a {
    margin-bottom: 13.8rem;
    text-decoration: none;
    font-size: 1.7vw;

    &:hover {
      transition: transform 300ms;
      transform: scale(1.08);
    }

    will-change: transform;
    transition: transform 450ms;

    ${({ theme }) => css`
      color: ${theme.colors.white};
      /* font-size: ${theme.font.sizes.large}; */
      font-weight: ${theme.font.weight.semiBold};
      margin-top: ${theme.spacing.huge};
    `}
  }

  ${({ theme }) => css`
    color: ${theme.colors.white};
  `}
`;
