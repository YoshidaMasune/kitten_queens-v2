import Cats from '@/components/contents/cats/Cats';
import HeadCat from '@/components/contents/cats/HeadCat';
import Knowlage from '@/components/contents/knowlageTip/Knowlage';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import React from 'react';

function index() {
  return (
    <div>
      <Head>
        <title>cats</title>
      </Head>
      <Layout>
        <div>
          <HeadCat />
          <Cats />

          <div>
            <Knowlage />
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default index;
