import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { cat } from '@/data/cats';
import { getcat } from '@/data/fetchdata/getData';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Cid() {
  const [cat, setCat] = useState<cat>();
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { cid } = router.query;

  useEffect(() => {
    setLoading(true);
    if (cid === undefined) {
      return;
    } else {
      setCat(getcat(Number(cid)));
      setLoading(false);
    }
  }, [cid]);

  return (
    <>
      {loading ? null : (
        <Layout>
          <Head>
            <title>{cat?.bleed.eng}</title>
          </Head>

          {/* main content */}
          <main>
            {/* header bleed of cat */}
            <header className="mt-4">
              <article className="text-center font-semibold text-slate-700 text-lg">
                <h1>{cat?.bleed.eng}</h1>
                <h1>{cat?.bleed.th}</h1>
              </article>
            </header>

            {/* content of cat */}
            <div className="grid grid-flow-row gap-y-4 lg:gap-y-32 mt-10 lg:mt-32 ">
              {/* title info */}
              <section className="grid grid-cols-2 gap-x-10 container mx-auto">
                {/* images of cat slider */}
                <div className="lg:justify-end">
                  <Slider
                    {...{
                      arrows: false,
                      autoplay: true,
                      autoplaySpeed: 3000,
                    }}
                  >
                    {cat?.img.map((img, index) => {
                      return (
                        <Image
                          key={index}
                          src={`${img || '/cats/persian/03.png'}`}
                          width={600}
                          height={600}
                          alt={`${cat?.bleed.eng}`}
                          priority
                          className="h-32 lg:h-96 object-contain"
                        />
                      );
                    })}
                  </Slider>
                </div>

                {/* infomation fo cat */}
                <div>
                  <article className="flex flex-col gap-5">
                    <section className="flex flex-col">
                      <h2 className="font-bold">การเลี้ยงดู</h2>
                      <p className="indent-4">{cat?.husbandry}</p>
                    </section>

                    <section className="flex gap-5">
                      <h2>ราคา:</h2>
                      <p>{2009}</p>
                    </section>
                  </article>
                </div>
              </section>

              {/* ความเป็นมา */}
              <section className="bg-sky-200">
                <article className="container mx-auto p-10 ">
                  <h2 className="text-center text-lg font-semibold">
                    ความเป็นมา
                  </h2>
                  <p className="indent-5">{cat?.derivation}</p>
                </article>
              </section>

              {/* ลักษณะทั่วไป */}
              <section>
                <div>
                  <Image
                    src={`${cat?.general_nature.img}`}
                    width={500}
                    height={500}
                    alt={`${cat?.bleed.eng}`}
                    priority
                  />
                </div>
                <div>
                  <article>
                    <h2>ลักษณะทั่วไป</h2>
                    <p>{cat?.general_nature.info}</p>
                  </article>
                </div>
              </section>

              {/* ลักษณะนิสัย */}

              <section>
                <div>
                  <Image
                    src={`${cat?.general_character.img}`}
                    width={500}
                    height={500}
                    alt={`${cat?.bleed.eng}`}
                    priority
                  />
                </div>
                <div>
                  <article>
                    <h2>ลักษณะนิสัย</h2>
                    <p>{cat?.general_character.info}</p>
                  </article>
                </div>
              </section>
            </div>
          </main>
        </Layout>
      )}
    </>
  );
}

export default Cid;
