import styled, { css } from 'styled-components';

type IconProps = {
  type: 'class' | 'favorite';
};

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ theme }) => theme.spacing.large};
  padding-inline: ${({ theme }) => theme.spacing.huge};
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const Icon = styled.img<IconProps>`
  height: 100%;
  max-height: 4.5rem;
  width: ${({ type }) => (type === 'class' ? 'auto' : '6.3rem')};
`;

export const WrapButtonShowOrHide = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonShowOrHide = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;

  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.semiBold};
  `}
`;

export const Filter = styled.select``;

export const FilterOption = styled.option``;
