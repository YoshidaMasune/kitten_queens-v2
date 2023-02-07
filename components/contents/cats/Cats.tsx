import React, { useState } from 'react';
import getData from '@/data/fetchdata/getData';
import { cat } from '@/data/cats';
import CatSlideItem from './items/CatSlideItem';
import Image from 'next/image';
import Link from 'next/link';

function Cats() {
  const [cats, setCats] = useState<Array<any>>(getData('cats'));

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-20 auto-rows-[15rem] justify-items-center container mx-auto my-24">
      {cats.length === 0 ? null : (
        <>
          {genCats(cats)}

          <div></div>
          <div>
            <Image
              src="/logo/logo_cat.png"
              width={1000}
              height={1000}
              priority
              alt="logo cat"
            />
          </div>
        </>
      )}
    </div>
  );
}

// JSX.components
interface catItem {
  cat: cat;
}

const CatItem = ({ cat }: catItem) => {
  return (
    <div className="relative grid grid-rows-[2fr_1fr] w-4/5 sm:w-44 md:w-54 overflow-hidden rounded-lg shadow-[0rem_.12rem_8px_.2rem] shadow-sky-800">
      {/* number */}
      <article className="text-lg text-white absolute flex items-center justify-center rounded-full w-10 h-10 bg-sky-500">
        <h3>{cat.id}</h3>
      </article>

      <Image
        src={`${cat.img[2] || '/cats/USAshorthair/05.png'}`}
        width={600}
        height={600}
        priority
        alt={cat.bleed.eng}
        className="w-full object-top absolute -z-10 object-cover h-full hover:scale-125 duration-300"
      />

      {/* infomation of cat */}
      <div>
        <article className="mt-2 p-2 flex flex-col absolute bottom-0 bg-white">
          {/* head => cats.bleed */}
          <h2 className="text-center">{cat.bleed.th}</h2>

          {/* title => cat.derivation */}
          <p className="line-clamp-2 text-xs indent-2">{cat.derivation}</p>
          <button className="btn-primary w-fit self-end text-sm">
            <Link href={`/cats/${cat.id}`}>readmore</Link>
          </button>
        </article>
      </div>
    </div>
  );
};

// functional components
/**
 *
 * @param param0
 * @returns
 */

const genCats = (list: Array<cat>) => {
  return list.map((item) => {
    return <CatItem cat={item} key={item.id} />;
  });
};

export default Cats;
