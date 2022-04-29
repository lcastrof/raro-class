import styled, { css } from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.div`
  width: 6.5rem;
  height: 6.5rem;
  margin-left: ${({ theme }) => theme.spacing.huge};
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
export const TitleList = styled.div`
  width: 16rem;
  height: 5rem;
  margin: ${({ theme }) => theme.spacing.small};
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
export const Main = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  padding-left: ${({ theme }) => theme.spacing.small};
`;
export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: ${({ theme }) => theme.spacing.medium};
`;
export const CardVideo = styled.div`
  width: 40rem;
  height: 16.5rem;
  ${({ theme }) => css`
    margin: ${theme.spacing.medium};
    margin-bottom: 0;
    border-radius: ${theme.border.radius.medium};
  `};
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
export const TitleVideo = styled.div`
  width: 38rem;
  height: 2.5rem;
  ${({ theme }) => css`
    margin-top: ${theme.spacing.xsmall};
    margin-bottom: 0;
    border-radius: ${theme.border.radius.medium};
  `};
  background-image: linear-gradient(
    -90deg,
    #e7edf1 0%,
    #dfdfdf 50%,
    #e7edf1 100%
  );
  background-size: 400% 400%;
  animation: shimmer 1.2s ease-in-out infinite;

  @keyframes shimmer {
    0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
  }
`;
