import { knowlage } from '@/data/knowlages';
import Image from 'next/image';
import React from 'react';

interface headItem {
  head?: knowlage;
}

function HeaderItem({ head }: headItem) {
  return (
    <div className="w-full grid grid-cols-2 justify-items-center gap-20 py-24">
      <div className="justify-self-end">
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
      <div className="justify-self-start ">
        <article className="space-y-5 flex flex-col w-3/5">
          <h3 className="text-4xl">{head?.head}</h3>
          <p className=" ml-3 indent-10">{head?.content}</p>

          <button className="btn-primary self-center">บทความอื่นๆ</button>
        </article>
      </div>
    </div>
  );
}

export default HeaderItem;
