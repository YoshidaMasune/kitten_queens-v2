import Blog from '@/components/contents/blogs/Blog';
import Layout from '@/components/layout/Layout';
import Head from 'next/head';
import React from 'react';

function index() {
  console.log();

  return (
    <div>
      <Head>
        <title>blogs</title>
      </Head>
      <Layout>
        <Blog />
      </Layout>
    </div>
  );
}

export default index;
