import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { cat } from '@/data/cats';
import { getcat } from '@/data/fetchdata/getData';
import Cat from '@/components/contents/cats/Cat';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import Image from 'next/image';

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
            <header>
              <article>
                <h1>{cat?.bleed.eng}</h1>
                <h1>{cat?.bleed.th}</h1>
              </article>
            </header>

            {/* content of cat */}
            <div>
              {/* title info */}
              <section>
                {/* images of cat slider */}
                <div>
                  <Image
                    src={`${cat?.img[1]}`}
                    width={600}
                    height={600}
                    alt={`${cat?.bleed.eng}`}
                    priority
                  />
                </div>

                {/* infomation fo cat */}
                <div>
                  <article>
                    <section className="flex">
                      <h2>การเลี้ยงดู</h2>
                      <p>{cat?.husbandry}</p>
                    </section>

                    <section className="flex">
                      <h2>ราคา</h2>
                      <p>{2009}</p>
                    </section>
                  </article>
                </div>
              </section>

              {/* ความเป็นมา */}
              <section>
                <article>
                  <h2>ความเป็นมา</h2>
                  <p>{cat?.derivation}</p>
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
