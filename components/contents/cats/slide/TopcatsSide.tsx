import React, { useEffect, useState } from 'react';

import getData from '@/data/fetchdata/getData';
import Slider from 'react-slick';
import CatSlideItem from '../items/CatSlideItem';

import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

function TopcatsSide() {
  const [cats, setCats] = useState<Array<any>>([]);
  const [slideRef, setSlideRef]: any = useState();

  useEffect(() => {
    const data = getData('cats');
    setCats(data);
  }, []);
  const settingSlide = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="">
      <div className="lg:w-3/5 container mx-auto">
        {cats.length === 0 ? null : (
          <div className="relative">
            <Slider ref={setSlideRef} {...settingSlide}>
              {cats.map((cat, index) => {
                return <CatSlideItem cat={cat} key={index} />;
              })}
            </Slider>

            <button
              onClick={slideRef?.slickPrev}
              className="absolute top-2/4 left-0 text-4xl slick-btn"
            >
              <BsChevronCompactLeft />
            </button>
            <button
              onClick={slideRef?.slickNext}
              className="absolute top-2/4 right-0 text-4xl slick-btn"
            >
              <BsChevronCompactRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default TopcatsSide;
