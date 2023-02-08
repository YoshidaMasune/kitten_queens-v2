import { knowlage } from '@/data/knowlages';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface headItem {
  head?: knowlage;
}

function HeaderItem({ head }: headItem) {
  return (
    <div
      className="w-full grid gap-y-6 justify-items-center grid-cols-none py-10  px-5
      sm:grid-cols-2 sm:grid-rows-none sm:py-24
      md:gap-y-0 md:gap-x-20 
      "
    >
      {/* sm for grid responsive rows  */}
      {/* chang justify-items-center for sm responsive */}
      <div className="sm:justify-self-end">
        <div className="shadow overflow-hidden md:rounded-full rounded-md">
          <Image
            src={`${head?.img}`}
            width={700}
            height={700}
            alt="cat"
            priority
            className="w-full h-32 lg:h-auto md:aspect-square object-center object-cover"
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
          <Link href={`/blogs`}>
            <button className="btn-primary self-center">บทความอื่นๆ</button>
          </Link>
        </article>
      </div>
    </div>
  );
}

export default HeaderItem;
