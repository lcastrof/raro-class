import styled from 'styled-components';

export const Container = styled.section``;

export const ClassesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
  gap: ${({ theme }) => theme.spacing.large};
  padding-inline: 6.4rem;
`;

export const EmptyMessage = styled.p`
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
