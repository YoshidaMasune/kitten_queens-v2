import React, { useEffect, useRef, useState } from 'react';

import Slide from 'react-slick';
// Import css files
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import getData from '@/data/fetchdata/getData';
import HeaderItem from './items/HeaderItem';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function Header() {
  const [slideSetting, setSlide] = useState({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
  });
  const [slideRef, setSideRef] = useState<any>();
  const [knowlages, setKnowlages] = useState<Array<any>>([]);

  useEffect(() => {
    const result = getData('knowlages');
    setKnowlages(result);
  }, []);

  return (
    <div className="">
      {knowlages.length === 0 ? null : (
        <div className="relative max-h-[60vh]">
          <Slide ref={setSideRef} {...slideSetting}>
            {knowlages.map((knowlage, index) => {
              if (index > 3) {
                return null;
              }
              return <HeaderItem key={index} head={knowlage} />;
            })}
          </Slide>

          <div className="absolute lg:bottom-0 bottom-2/4 w-full lg:w-fit left-2/4 -translate-x-2/4 lg:text-4xl lg:space-x-5">
            <button
              onClick={slideRef?.slickPrev}
              className="lg:static absolute left-0 p-2 slick-btn"
            >
              <BsChevronCompactLeft />
            </button>

            <button
              onClick={slideRef?.slickNext}
              className="p-2 lg:static absolute right-0 slick-btn"
            >
              <BsChevronCompactRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
