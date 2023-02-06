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
        <div className="relative">
          <Slide ref={setSideRef} {...slideSetting}>
            {knowlages.map((knowlage, index) => {
              if (index > 3) {
                return null;
              }
              return <HeaderItem key={index} head={knowlage} />;
            })}
          </Slide>

          <div className="absolute bottom-0 left-2/4 -translate-x-2/4 text-4xl space-x-5 ">
            <button
              onClick={slideRef?.slickPrev}
              className="aspect-square p-2 text-yellow-700 hover:bg-sky-500 rounded-full
              transition-colors duration-200 hover:text-white"
            >
              <BsChevronCompactLeft />
            </button>

            <button
              onClick={slideRef?.slickNext}
              className="aspect-square p-2 text-yellow-700
              transition-colors duration-200 hover:bg-sky-500 rounded-full hover:text-white"
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
