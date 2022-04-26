import styled, { css } from 'styled-components';

type VideoFieldProps = {
  backgroundImg: string;
};

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xsmall};
  position: relative;

  width: 100%;
`;
export const VideoField = styled.div<VideoFieldProps>`
  position: relative;
  right: 3px;
  width: 100%;
  height: 16.5rem;
  background-image: url(${({ backgroundImg }) => backgroundImg});
  background-size: cover;
  background-position: center;
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.medium};
    box-shadow: ${theme.boxShadow.thumb};
    transition: all 0.3s;
    &::after {
      content: '';
      background: transparent;
      position: absolute;
      transition: all 0.3s;
      inset: 0;
      border-radius: ${theme.border.radius.medium};
      background: linear-gradient(to top, #b4b3b9 0.1%, transparent);
      opacity: 0;
    }
    &:hover {
      &::after {
        opacity: 1;
      }
    }
  `}
`;
export const Title = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.medium};
    padding-left: ${theme.spacing.medium};
  `}
`;
export const StarButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 4rem;
  height: 4rem;
  z-index: 2;
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.round};
    bottom: ${theme.spacing.small};
    right: ${theme.spacing.small};
    transition: all 0.3s;
    &:hover {
      background-color: ${theme.colors.gray};
    }
  `}
  cursor: pointer;
`;
