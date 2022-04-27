import React, { useState, useEffect } from 'react';
import SliderItem from './SliderItem';
import { StyledSliderWrapper, StyledSlider } from './SliderStyles';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

type SliderProps = {
  children?: React.ReactNode[];
  zoomFactor: number;
  slideMargin: number;
  maxVisibleSlides: number;
  pageTransition: number;
};

export const numberOfSlides = (
  maxVisibleSlides: number,
  windowWidth: number
) => {
  if (windowWidth >= 3666) return maxVisibleSlides; //3840px
  if (windowWidth >= 2386) return 6; //2560px
  if (windowWidth >= 1266) return 5; //1440px
  if (windowWidth >= 850) return 4; //1024px
  return 3; //768px
};

const Slider: React.FC<SliderProps> = ({
  children,
  zoomFactor,
  slideMargin,
  maxVisibleSlides,
  pageTransition
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [transformValue, setTransformValue] = useState(`-${zoomFactor / 2}%`);
  const [scrollSize, setScrollSize] = useState(0);

  const sliderRef = React.useRef<HTMLDivElement>(null);

  const visibleSlides = numberOfSlides(maxVisibleSlides, scrollSize);
  // Pages start at 0, therefore -1 at the end here
  const totalPages: number = Math.ceil(children!.length / visibleSlides) - 1;

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => {
      setScrollSize(entries[0].contentRect.width);
    });
    resizeObserver.observe(sliderRef.current!);
  }, [sliderRef]);

  // Position slider on resize
  useEffect(() => {
    if (sliderRef && sliderRef.current) {
      if (currentPage > totalPages) setCurrentPage(totalPages);
      sliderRef.current.style.transform = `translate3D(-${
        currentPage * scrollSize
      }px, 0, 0)`;
    }
  }, [sliderRef, currentPage, scrollSize, totalPages]);

  // Have to disable hover effect on slides when flipping page
  // Otherwise it will look ugly when mouse hovers over the slides
  const disableHoverEffect = () => {
    if (sliderRef.current) sliderRef.current.style.pointerEvents = 'none';
    setTimeout(() => {
      if (sliderRef.current) sliderRef.current.style.pointerEvents = 'all';
    }, pageTransition);
  };

  const handleSlideMove = (forward: boolean) => {
    disableHoverEffect();
    setCurrentPage(currentPage + (forward ? 1 : -1));

    if (sliderRef.current)
      sliderRef.current.style.transform = `translate3D(-${
        (currentPage + (forward ? 1 : -1)) * scrollSize
      }px, 0, 0)`;
  };

  const handleMouseOver = (id: number) => {
    if (id % visibleSlides === 1) setTransformValue('0%'); // left
    if (id % visibleSlides === 0) setTransformValue(`-${zoomFactor}%`); // right
  };

  const handleMouseOut = () => {
    setTransformValue(`-${zoomFactor / 2}%`);
  };

  const assignSlideClass = (index: number, visibleSlides: number) => {
    const classes = ['right', 'left'];
    return classes[index % visibleSlides] || '';
  };

  return (
    <StyledSliderWrapper zoomFactor={zoomFactor} visibleSlides={visibleSlides}>
      <StyledSlider
        visibleSlides={visibleSlides}
        transformValue={transformValue}
        zoomFactor={zoomFactor}
        slideMargin={slideMargin}
        pageTransition={pageTransition}
        ref={sliderRef}
      >
        {children!.map((child: React.ReactNode, i: number) => (
          <SliderItem
            key={i}
            slideMargin={slideMargin}
            visibleSlides={visibleSlides}
            zoomFactor={zoomFactor}
            slideClass={assignSlideClass(i + 1, visibleSlides)}
            id={i + 1}
            callback={handleMouseOver}
            callbackOut={handleMouseOut}
          >
            {child}
          </SliderItem>
        ))}
      </StyledSlider>
      {currentPage > 0 && (
        <div className="button-wrapper back">
          <button
            className="button back"
            onClick={() => handleSlideMove(false)}
          >
            <MdKeyboardArrowLeft size={40} />
          </button>
        </div>
      )}
      {currentPage !== totalPages && (
        <div className="button-wrapper forward">
          <button
            className="button forward"
            onClick={() => handleSlideMove(true)}
          >
            <MdKeyboardArrowRight size={40} />
          </button>
        </div>
      )}
    </StyledSliderWrapper>
  );
};

export default Slider;
