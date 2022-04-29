import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  /* width: 100%; */
  margin-top: -4rem;
`;

export const Container2 = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* padding-block: 0 !important; */
  margin-top: 10.2rem;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 75vw;
`;

export const ContainerRight = styled.div`
  width: 25vw;
  margin-top: -4rem;
  background: #fbfbfe;
  box-shadow: -4px 0px 20px rgb(0 0 0 / 10%);
`;

export const TitleRecommended = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.font.sizes.small};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  text-align: center;
  padding: ${({ theme }) => theme.spacing.medium};
  background-color: #dadada;
`;
