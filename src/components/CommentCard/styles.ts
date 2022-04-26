import styled, { css } from 'styled-components';

export const Container = styled.div`
  background-color: grey;
  width: 50rem;
  height: 10rem;

  padding: 0.8rem;
  display: flex;
  align-items: flex-start;
`;

export const Avatar = styled.img`
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
    width: 6rem;
  `};
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-left: 1rem;
  margin-top: 1rem;
`;

export const UserName = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.bold};
    font-size: ${theme.font.sizes.medium};
  `};
`;

export const Comment = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.babyVioletBlue};
    font-weight: ${theme.font.weight.bold};
  `}
`;

export const ReactComment = styled.div`
  display: flex;

  ${({ theme }) => css`
    p {
      color: ${theme.colors.maximumBlue};
      padding-right: 2rem;
    }
  `}
`;
