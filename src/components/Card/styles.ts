import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

export const Container = styled.div`
  position: relative;
  width: 30rem;
  height: 19.5rem;
`;
export const VideoField = styled.div`
  position: relative;
  right: 3px;
  width: 30rem;
  height: 16.5rem;
  ${({ theme }) => css`
    border-radius: ${theme.border.radius.medium};
    box-shadow: ${theme.boxShadow.thumb};
    transition: all 0.3s;
    &:hover {
      background-image: linear-gradient(to top, #b4b3b7 0.1%, transparent);
    }
  `}
`;
export const Title = styled.div`
  position: relative;
  display: flex;
  justify-content: baseline;
  margin-top: ${theme.spacing.xsmall};
  ${({ theme }) => css`
    bottom: ${theme.spacing.xsmall};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.weight};
    padding-left: ${theme.spacing.medium};
  `}
`;
export const Star = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 4rem;
  height: 4rem;
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
