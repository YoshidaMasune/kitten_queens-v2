import Cats from '@/components/contents/cats/Cats';
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
        <Cats />
      </Layout>
    </div>
  );
}

export default index;
