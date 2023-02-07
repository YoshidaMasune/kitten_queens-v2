import Image from 'next/image';
import React, { useState } from 'react';
import { cat } from '@/data/cats';

interface catitem {
  cat: cat;
}

function CatSlideItem({ cat }: catitem) {
  return (
    <div className=" relative grid grid-rows-[4fr_2fr] bg-white w-3/4 mx-auto rounded-lg shadow-lg m-3 gap-y-2 p-1">
      {/* number of id */}

      <article className="absolute top-0 left-0 text-gray-700 -translate-x-2 -translate-y-2 bg-yellow-400 flex w-10 h-10 items-center justify-center rounded-full text-center">
        <p className="text-2xl">{cat?.id}</p>
      </article>

      {/* image */}
      <div className="w-11/12 justify-self-center overflow-hidden aspect-square rounded-full shadow-md">
        <Image
          src={`${cat.img[2] || '/cats/main_coon/06.png'}`}
          width={400}
          height={400}
          priority
          alt={`${cat.bleed}`}
          className="h-full object-cover"
        />
      </div>

      {/* content */}
      <div className="">
        <article className="space-y-1 flex flex-col ">
          <h3 className="text-lg text-center">{cat.bleed.th}</h3>
          <p className="line-clamp-3 px-5 indent-5">{cat.derivation}</p>
          <button className="w-fit hover:w-10/12 transition-[width] ease-in-out self-center btn-primary">
            อ่านต่อ
          </button>
        </article>
      </div>
    </div>
  );
}

export default CatSlideItem;
