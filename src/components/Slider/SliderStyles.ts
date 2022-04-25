import styled from 'styled-components';
import { StyledSliderItem } from './SliderItemStyles';

type SliderWrapperProps = {
  zoomFactor: number;
  visibleSlides: number;
};

type SliderProps = {
  visibleSlides: number;
  transformValue: string;
  zoomFactor: number;
  slideMargin: number;
  pageTransition: number;
  ref: React.MutableRefObject<HTMLDivElement | null>;
};

export const StyledSliderWrapper = styled.div<SliderWrapperProps>`
  overflow: hidden;
  position: relative;
  background: transparent;
  padding: ${(props) => (props.zoomFactor / props.visibleSlides) * 0.3 + '%'} 0; //...* 0.7

  .button-wrapper {
    position: absolute;
    width: 4rem;
    height: 100%;
    top: 0;

    display: flex;
    align-items: center;

    padding: ${(props) => props.zoomFactor / 7 + '%'} 0;
    box-sizing: border-box;
  }

  .button {
    display: block;
    background: rgb(78, 71, 194, 0.8);
    border: 0;
    top: 0;
    width: 100%;
    //height: 100%;
    color: #fff;
    font-size: 3rem;
    font-weight: 800;
    cursor: pointer;
    outline: none;
    transition: all 0.7s;
    user-select: none;

    display: flex;
    justify-content: center;
    :hover {
      background: rgb(0, 0, 0, 0.5);
      //opacity: 0.5;
    }
  }

  .back {
    left: 0;
    //border-radius: 0 1.5vw 1.5vw 0;
    border-radius: 100%;
  }

  .forward {
    right: 0;
    /* border-radius: 1.5vw 0 0 1.5vw; */
    border-radius: 100%;
  }

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
  transform-origin: top right;
`;

export const StyledSlider = styled.div<SliderProps>`
  display: flex;
  padding: 0 55px;
  transition: transform ${(props) => props.pageTransition}ms ease;

  :hover ${StyledSliderItem} {
    transform: translateX(${(props) => props.transformValue});
  }
`;
