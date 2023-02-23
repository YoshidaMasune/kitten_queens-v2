import React, { useState } from 'react';
import getData from '@/data/fetchdata/getData';
import { cat } from '@/data/cats';
import Image from 'next/image';
import Link from 'next/link';

function Cats() {
  const [cats, setCats] = useState<Array<any>>(getData('cats'));

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-20 auto-rows-[15rem] justify-items-center container xl:w-3/5 mx-auto my-24">
      {cats.length === 0 ? null : (
        <>
          {genCats(cats)}

          <div className="lg:block hidden"></div>

          <Image
            src="/logo/logo_cat.png"
            width={1000}
            height={1000}
            priority
            alt="logo cat"
            className="w-auto h-full object-center lg:block hidden"
          />
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
    <div className="relative grid w-4/5 sm:w-44 md:w-54 rounded-lg shadow-[0rem_.12rem_8px_.2rem] transition-all duration-200 ease-in-out shadow-slate-300 hover:shadow-yellow-600">
      {/* number */}
      <article className="text-lg text-white absolute -translate-x-4 -translate-y-4 flex items-center justify-center rounded-full w-10 h-10 bg-sky-500">
        <h3>{cat.id}</h3>
      </article>

      <div className="relative rounded-lg overflow-hidden bottom-0">
        <Image
          src={`${cat.img[2] || '/cats/USAshorthair/05.png'}`}
          width={600}
          height={600}
          priority
          alt={cat.bleed.eng}
          className="w-full object-top absolute -z-10 object-cover h-full hover:scale-125 duration-300"
        />

        {/* infomation of cat */}
        <div className="absolute bottom-0 backdrop-blur-sm text-black bg-white bg-opacity-50">
          <article className="mt-2 p-2 flex flex-col ">
            {/* head => cats.bleed */}
            <h2 className="text-center">{cat.bleed.th}</h2>

            {/* title => cat.derivation */}
            <p className="line-clamp-2 text-xs indent-2">{cat.derivation}</p>
            <Link href={`/cats/${cat.id}`} className="self-center">
              <button className="btn-primary w-fit  text-sm">อ่านต่อ</button>
            </Link>
          </article>
        </div>
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
