import styled from 'styled-components';

export const LogoScMedia = styled.img`
  margin: 0 10px 0 10px;
  width: 30px;

  &:hover {
    transition: transform 300ms;
    transform: translateY(-8px);
  }
  will-change: transform;
  transition: transform 450ms;
`;
