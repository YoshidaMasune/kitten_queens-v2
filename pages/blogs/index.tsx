import BlogItem from '@/components/contents/blogs/blogItem';
import Layout from '@/components/layout/Layout';
import { blog } from '@/data/blogs';
import getData from '@/data/fetchdata/getData';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';

function index() {
  const [blogs, setBlogs] = useState<Array<blog | any>>([]);
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
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] container lg:w-3/5 mx-auto">
          {/* header */}
          <div>
            <section>
              <article className="text-4xl">
                <h1 className="text-sky-500">บทความ</h1>
                <h2 className="text-yellow-500 indent-3">Cat{"'"}s blos</h2>
              </article>
            </section>

            {/* content */}
            <section>
              {blogs.length === 0 ? null : (
                <div className="grid grid-flow-row mx-auto gap-y-10 auto-rows-fr">
                  {blogs.map((blog, index) => {
                    return <BlogItem key={index} blog={blog} />;
                  })}
                </div>
              )}
            </section>
          </div>

          {/* aside */}
          <section className="hidden lg:block"></section>
        </div>
      </Layout>
    </div>
  );
}

export default index;
