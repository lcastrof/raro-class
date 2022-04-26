import styled from 'styled-components';

export const Container = styled.section``;

export const NoneVideoFavorite = styled.div`
  width: 100%;
  height: 10vh;
  text-align: center;
`;

export const imgNoFavorite = styled.img`
  width: 2.7%;
`;

export const TextNoneVideoFavorite = styled.p`
  color: #ababab;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
`;
