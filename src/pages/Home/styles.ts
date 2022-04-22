import styled from 'styled-components';

export const Container = styled.div``;

export const ClassesWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.medium};

  > div {
    width: 36.6rem;
    height: 19.7rem;
    background: gray;
    border-radius: ${({ theme }) => theme.border.radius.medium};
    display: grid;
    place-content: center;
  }
`;
