import Layout from '@/components/layout/Layout';
import getData from '@/data/fetchdata/getData';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';

function index() {
  const [blogs, setBlogs] = useState<Array<any>>();
  useEffect(() => {
    const data = getData('blogs');
    setBlogs(data);
  }, []);
  return (
    <div>
      <Head>
        <title>blogs</title>
      </Head>
      <Layout>
        <div>
          {/* header */}
          <section>
            <article>
              <h1>บทความ</h1>
              <h2>Cat{"'"}s blos</h2>
            </article>
          </section>

          {/* content */}
          <section></section>
          {/* aside */}
          <section></section>
        </div>
      </Layout>
    </div>
  );
}

export default index;
