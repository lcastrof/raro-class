import styled from 'styled-components';

export const Container = styled.div`
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
  height: 100px;
  display: flex;
  padding: ${({ theme }) => theme.spacing.small};
`;

export const Star = styled.div`
  width: 10%;
  margin-top: ${({ theme }) => theme.spacing.medium};
  text-align: center;

  display: flex;
  justify-content: center;
`;

export const WrapTitleDescription = styled.div`
  width: 100%;
  font-size: 1rem;
  margin-top: ${({ theme }) => theme.spacing.medium};

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    margin-bottom: ${({ theme }) => theme.spacing.small};
  }

  h2 {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: ${({ theme }) => theme.font.weight.regular};
    font-size: ${({ theme }) => theme.font.sizes.small};
  }

  //background: lightsalmon;
`;
