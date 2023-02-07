import React, { useState } from 'react';
import getData from '@/data/fetchdata/getData';
import { knowlage } from '@/data/knowlages';
import Image from 'next/image';

function TipKnowlage() {
  const [knowlages, setKnowlaages] = useState<Array<any>>(getData('knowlages'));

  return (
    <div>
      <div className="grid grid-flow-row auto-rows-[minmax(20rem,_30rem)] w-3/4 mx-auto">
        {knowlages.length === 0 ? null : genKnowlagesItems(knowlages)}
      </div>
    </div>
  );
}

const genKnowlagesItems = (list: Array<knowlage>) => {
  const len: number = list.length;
  return list.map((item, index) => {
    return index < len - 2 ? null : (
      <KnowlageItem key={index} knowlage={item} primary={index == len - 1} />
    );
  });
};

interface knowlageItem {
  knowlage: knowlage;
  primary: boolean;
}

const KnowlageItem = ({ knowlage, primary }: knowlageItem) => {
  return (
    <div
      className={`flex items-center ${
        primary ? 'flex-row' : 'flex-row-reverse'
      }`}
    >
      <article className="flex-1 space-y-5">
        <h2 className="text-4xl text-slate-700">{knowlage.head}</h2>
        <p className="text-xl leading-relaxed indent-5">{knowlage.content}</p>
      </article>

      <div className="flex-1 overflow-hidden">
        <div className="w-64 h-64 mx-auto border rounded-full overflow-hidden">
          <Image
            src={`${knowlage.img}`}
            width={500}
            height={500}
            priority
            alt={knowlage.head}
            className="object-center aspect-square object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TipKnowlage;
