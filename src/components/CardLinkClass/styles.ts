import styled, { css } from 'styled-components';

type StarButtonProps = {
  isFavorited: boolean;
};

export const Container = styled.section<{ fixedWidth?: boolean }>`
  width: 100%;
  height: auto;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: ${({ theme }) => theme.spacing.medium};
  padding-right: 0;
  padding-bottom: ${({ theme }) => theme.spacing.medium};
  padding-left: ${({ theme }) => theme.spacing.medium};
  display: flex;
  border: 1px solid rgba(181, 179, 230, 0.34);

  &:hover {
    background-color: #e1e0f5;
  }
`;

export const WrapIconTitle = styled.section`
  display: flex;
`;

export const Star = styled.div`
  padding: ${({ theme }) => theme.spacing.xsmall};
`;

// type StarButtonProps = {
//   isFavorited: boolean;
// };

// export const StarButton = styled.div<StarButtonProps>`
export const StarButton = styled.div<StarButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 100%;
  margin-left: -${({ theme }) => theme.spacing.small};
  margin-top: -${({ theme }) => theme.spacing.xsmall};

  ${({ theme }) => css`
    border-radius: ${theme.border.radius.round};
    bottom: ${theme.spacing.small};
    right: ${theme.spacing.small};
    transition: all 0.3s;
    > svg {
      fill: ${theme.colors.primary};
    }
    &:hover {
      background-color: ${theme.colors.white};
    }
  `}
  cursor: pointer;
`;

export const WrapInfo = styled.div`
  width: auto;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};

  padding: ${({ theme }) => theme.spacing.xsmall};
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 95%;
`;

export const WrapIconInfo = styled.div`
  display: flex;
  padding-top: ${({ theme }) => theme.spacing.xsmall};
`;

export const IconPlay = styled.img`
  padding-left: ${({ theme }) => theme.spacing.xsmall};
  width: 7%;
`;

export const VideoTimeLenght = styled.h4`
  font-size: ${({ theme }) => theme.font.sizes.xxsmall};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  padding-left: ${({ theme }) => theme.spacing.small};
`;

export const MainContent = styled.main`
  padding-block: 0;
`;
