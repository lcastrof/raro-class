import styled, { css } from 'styled-components';

export const Container = styled.div`
  .react-player > div {
    background-repeat: no-repeat;
    background-size: contain !important;
    background-color: #000;
    height: 67vh !important;
  }

  .react-player > video {
    height: 36vw !important;
    background-color: black;
  }
`;

export const WrapInfo = styled.div`
  height: 100px;
  display: flex;
  padding: ${({ theme }) => theme.spacing.small};
`;

export const Star = styled.div`
  padding: ${({ theme }) => theme.spacing.xsmall};
`;

// type StarButtonProps = {
//   isFavorited: boolean;
// };

// export const StarButton = styled.div<StarButtonProps>`
export const StarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 56%;
  margin-left: -${({ theme }) => theme.spacing.small};
  margin-top: ${({ theme }) => theme.spacing.xxsmall};

  ${({ theme }) => css`
    border-radius: ${theme.border.radius.round};
    bottom: ${theme.spacing.small};
    right: ${theme.spacing.small};
    transition: all 0.3s;
    > svg {
      fill: ${theme.colors.primary};
    }
    &:hover {
      background-color: ${theme.colors.grayFade};
    }
  `}
  cursor: pointer;
`;

export const WrapTitleDescription = styled.div`
  width: 100%;
  font-size: 1rem;
  margin-top: ${({ theme }) => theme.spacing.medium};

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;
