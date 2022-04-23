import styled from 'styled-components';

type IconProps = {
  type: 'class' | 'favorite';
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.large};
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
