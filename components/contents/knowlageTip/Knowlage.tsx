import getData from '@/data/fetchdata/getData';
import { knowlage } from '@/data/knowlages';
import React, { useState, useEffect } from 'react';

function Knowlage() {
  const [knowlages, setKnowlaages] = useState<Array<knowlage | any>>(
    getData('knowlages'),
  );
  // useEffect(() => {}, [

  // ])
  return (
    <div
      className="grid grid-cols-1 gap-10 w-11/12 mx-auto
      lg:grid-cols-2 lg:w-3/5
      "
    >
      {knowlages.length === 0 ? null : genItems(knowlages)}
    </div>
  );
}

interface itemknowlage {
  knowlage: knowlage;
}

const KnowlageItem = ({ knowlage }: itemknowlage) => {
  return (
    <div className="w-full  bg-yellow-200 p-3 rounded-md">
      <article>
        <h2 className="text-lg lg:text-xl">{knowlage.head}</h2>
        <p className="text-sm lg:text-lg leading-5 indent-5 mt-5">
          {knowlage.content}
        </p>
      </article>
    </div>
  );
};

const genItems = (list: Array<knowlage>) => {
  const len = list.length;
  return list.map((item, index) => {
    if (index < len - 4) {
      return;
    } else {
      return <KnowlageItem key={index} knowlage={item} />;
    }
  });
};

export default Knowlage;
