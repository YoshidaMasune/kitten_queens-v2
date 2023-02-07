import { knowlage } from '@/data/knowlages';
import Image from 'next/image';
import React from 'react';

interface headItem {
  head?: knowlage;
}

function HeaderItem({ head }: headItem) {
  return (
    <div
      className="w-full grid md:gap-x-20 gap-y-6 md:gap-y-0 grid-rows-[2fr,_1fr] grid-cols-none sm:grid-rows-none sm:grid-cols-2 
      justify-items-center py-10 sm:py-24 px-5"
    >
      {/* sm for grid responsive rows  */}
      {/* chang justify-items-center for sm responsive */}
      <div className="sm:justify-self-end">
        <div className="shadow  overflow-hidden rounded-full">
          <Image
            src={`${head?.img}`}
            width={700}
            height={700}
            alt="cat"
            priority
            className="w-full h-auto aspect-square  object-center object-cover"
          />
        </div>
      </div>

      {/* content */}
      <div className="justify-seft-start">
        <article className="space-y-5 flex flex-col md:w-3/5 ">
          {/* head title */}
          <h3 className=" text-sm sm:text-lg md:text-4xl">{head?.head}</h3>
          {/* content */}
          <p className=" ml-3 text-xs lg:text-lg indent-10">{head?.content}</p>
          <button className="btn-primary self-center">บทความอื่นๆ</button>
        </article>
      </div>
    </div>
  );
}

export default HeaderItem;
