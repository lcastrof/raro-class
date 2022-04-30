import styled, { css } from 'styled-components';

export const Container = styled.div`
  padding-right: 20px;
  margin-bottom: 20px;
`;

export const UserCard = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  margin-left: 10px;

  ${({ theme }) => css`
    border: solid 3px transparent;
    background-image: linear-gradient(white, white),
      radial-gradient(
        circle at bottom left,
        #4e47c2 -14.58%,
        rgba(126, 188, 223, 0.6) 100%
      );
    background-origin: border-box;
    background-origin: border-box;
    background-clip: content-box, border-box;

    border-radius: ${theme.border.radius.round};
    width: 5rem;
  `};
`;

export const Input = styled.input`
  width: 100%;
  padding-inline: 1.5rem;
  padding-block: 1rem;
  /* padding-left: 100px; */
  margin-left: 20px;
  border: 2px solid transparent;

  ${({ theme }) => css`
    font-family: ${theme.font.family.montserrat};
    border-radius: ${theme.border.radius.medium};
    box-shadow: ${theme.boxShadow.input};

    &:focus-visible {
      outline: none;
      border-color: ${theme.colors.primary};
    }
  `}
`;

export const CardButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.gradients.bgNotFoundPage};
    border-radius: ${theme.border.radius.large};
    padding-inline: 1.8rem;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    height: 30px;
  `}
`;

export const DefaultButton = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.gray};
    border-radius: ${theme.border.radius.large};
    padding-inline: 1.8rem;
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    height: 30px;
  `}
`;
