import styled, { css } from 'styled-components';

type IconProps = {
  type: 'class' | 'favorite';
};

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.large};
  margin-bottom: ${({ theme }) => theme.spacing.medium};
  margin-top: ${({ theme }) => theme.spacing.xxlarge};
  padding-left: ${({ theme }) => theme.spacing.huge};

  /* .effectRowTitle {
    width: 100%;
    height: 100%;
    @keyframes growDown {
      0% {
        opacity: 0;
        transform: translateY(-40px);
        //transition: opacity 1s ease, transform 0.4s ease, visibility 1s;
      }
      100% {
        visibility: visible;
        opacity: 1;
        transform: translateY(0);
      }
    }
    animation: growDown 700ms ease-in-out forwards;
    transform-origin: top center;
  }*/
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;

export const Icon = styled.img<IconProps>`
  height: 100%;
  max-height: 4.5rem;
  width: ${({ type }) => (type === 'class' ? 'auto' : '6.3rem')};
`;

export const WrapButtonShowOrHide = styled.div`
  display: flex;
  align-items: center;
`;

export const ButtonShowOrHide = styled.button`
  position: absolute;
  right: 0;
  display: inline-flex;
  /* justify-content: center; */
  align-items: center;
  border: none;
  background: transparent;
  margin-right: 2rem;

  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: ${theme.font.weight.semiBold};
  `}
`;
