import SidebarBlogs from '@/components/layout/utils/SidebarBlogs';
import { blog } from '@/data/blogs';
import getData from '@/data/fetchdata/getData';
import React, { useEffect, useState } from 'react';
import CatsVidios from '../vides/CatsVidios';
import BlogItem from './BlogItem';

function Blog() {
  const [blogs, setBlogs] = useState<Array<blog | any>>([]);
  useEffect(() => {
    const data = getData('blogs');

    return setBlogs(data);
  }, []);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] container">
        {/* header */}
        <div className="space-y-10 lg:mt-24 mt-5">
          <section className="border-b ">
            <article className="text-4xl container lg:w-3/5 mx-auto">
              <h1 className="text-sky-700">บทความ</h1>
              <h2 className="text-yellow-700 indent-3">Cat{"'"}s blos</h2>
            </article>
          </section>

          {/* content */}
          <section className="container lg:w-3/5 mx-auto">
            {blogs.length === 0 ? null : (
              <div className="grid grid-flow-row w-11/12 mx-auto md:w-4/5 gap-y-10 auto-rows-fr">
                {blogs.map((blog, index) => {
                  return <BlogItem key={index} blog={blog} />;
                })}
              </div>
            )}
          </section>
        </div>

        {/* aside */}
        <section className="hidden lg:block border-l pl-10">
          <SidebarBlogs />
        </section>
      </div>
      <div className="w-11/12 md:w-3/5 mx-auto">
        <CatsVidios />
      </div>
    </div>
  );
}

export default Blog;
