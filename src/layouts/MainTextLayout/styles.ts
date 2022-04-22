import styled, { css } from 'styled-components';

export const Title = styled.h1`
  display: flex;
  color: hsla(242, 50%, 38%, 1);
  justify-content: center;
`;

export const SubTitle = styled.p`
  display: flex;
  color: hsla(242, 50%, 38%, 1);
  justify-content: center;
  font-size: 25px;
  letter-spacing: 0.2rem;
`;

export const LinksParagrafo = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 1.6rem;
  font-size: 14px;
  color: hsla(242, 50%, 38%, 1);
`;

export const ListInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.5rem;

  gap: 2rem;
`;

export const Footer = styled.footer`
  position: absolute;
  bottom: 1.5rem;
  margin-left: 5rem;
  text-align: center;
`;

export const FooterText1 = styled.p`
  display: flex;
  justify-content: center;

  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `};
`;

export const FooterText2 = styled.p`
  display: flex;
  justify-content: center;

  ${({ theme }) => css`
    color: ${theme.colors.gray};
  `};
`;
