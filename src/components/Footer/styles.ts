import styled, { css } from 'styled-components';

export const Container = styled.footer`
  height: 185px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background-image: url('/assets/art/artFooterBackground.png');
  background-repeat: no-repeat;
  background-position: 49.8%;
  background-size: 300% 100%;
  background-attachment: scroll;

  ${({ theme }) => css`
    font-family: ${theme.font.family.montserrat};
  `}
`;

export const WrapIcons = styled.section`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacing.medium};
  `};
`;

export const StarIcon = styled.section`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  img {
    width: 45px;
  }
`;

export const WrapText = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3px;

  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.exxsmall};
  `};
`;

export const TermsPrivacyLink = styled.section`
  a {
    text-decoration: none;
    margin: 0 5px 0 5px;

    ${({ theme }) => css`
      color: ${theme.colors.white};

      &:hover {
        font-weight: ${theme.font.weight.bold};
      }
    `};
  }
`;
