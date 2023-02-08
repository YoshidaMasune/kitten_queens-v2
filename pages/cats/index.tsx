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
        <div>
          <header className="h-64 flex items-center justify-center from-sky-200 to-yellow-100 bg-gradient-to-br">
            <article className="text-center">
              <h1 className="text-4xl font-medium text-slate-900">
                top 10 cats
              </h1>
            </article>
          </header>
          <Cats />
        </div>
      </Layout>
    </div>
  );
}

export default index;
