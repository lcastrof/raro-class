import styled from 'styled-components';

export const Link = styled.div`
  font-size: 1.4rem;
  justify-content: center;
  padding-bottom: 8px;
  margin-top: ${({ theme }) => theme.spacing.medium};
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  color: hsla(242, 50%, 38%, 1);
`;
