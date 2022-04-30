import styled, { css } from 'styled-components';

export const ContainerPLayerVideo = styled.div`
  flex: 1;
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
  display: flex;
  flex: 1;
  padding-block: ${({ theme }) => theme.spacing.large};
`;

export const Star = styled.div`
  padding-left: 2.5rem;
  padding-right: 1.5rem;
`;

export const StarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
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
  ${({ theme }) => css`
    width: 83%;
    font-size: 1rem;
    overflow-wrap: break-word;
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing.xsmall};

    h1 {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.weight.semiBold};
    }

    h2 {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.weight.regular};
      font-size: ${theme.font.sizes.small};
    }

    > time {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray};
    }
  `}
`;

export const Container = styled.div`
  display: flex;
  ${({ theme }) => css`
    gap: ${theme.spacing.medium};
    padding-top: ${theme.spacing.medium};
    padding-left: ${theme.spacing.medium};
  `}
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-bottom: ${({ theme }) => theme.spacing.xxlarge};
`;

export const ContainerRight = styled.div`
  background: #fbfbfe;
  box-shadow: -4px 0px 20px rgb(0 0 0 / 10%);
`;

export const TitleRecommended = styled.div`
  ${({ theme }) => css`
    text-align: center;
    background-color: #dadada;
    color: ${theme.colors.primary};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.semiBold};
    padding: ${theme.spacing.medium};
  `}
`;
