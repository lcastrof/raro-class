import styled, { css } from 'styled-components';

type VideoFieldProps = {
  backgroundImg: string;
};

type StarButtonProps = {
  isFavorited: boolean;
};

export const Container = styled.div<{ fixedWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.small};
  position: relative;

  width: ${({ fixedWidth }) => (fixedWidth ? '30rem' : '100%')};
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
      background: linear-gradient(to top, rgb(0, 0, 0, 0.3) 0.1%, transparent);
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
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight.medium};
    padding-left: ${theme.spacing.medium};
  `}
`;
export const StarButton = styled.div<StarButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 4rem;
  height: 4rem;
  z-index: 2;
  ${({ theme, isFavorited }) => css`
    border-radius: ${theme.border.radius.round};
    bottom: ${theme.spacing.small};
    right: ${theme.spacing.small};
    transition: all 0.3s;
    > svg {
      fill: ${isFavorited ? theme.colors.yellow : theme.colors.white};
    }
    &:hover {
      background-color: ${theme.colors.gray};
    }
  `}
  cursor: pointer;
`;
