import SidebarBlogs from '@/components/layout/utils/SidebarBlogs';
import { blog } from '@/data/blogs';
import getData from '@/data/fetchdata/getData';
import React, { useEffect, useState } from 'react';
import BlogItem from './BlogItem';

function Blog() {
  const [blogs, setBlogs] = useState<Array<blog | any>>([]);
  useEffect(() => {
    const data = getData('blogs');

    return setBlogs(data);
  }, []);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] container lg:w-3/5 mx-auto">
      {/* header */}
      <div className="space-y-32 mt-24">
        <section className="border-b">
          <article className="text-4xl">
            <h1 className="text-sky-500">บทความ</h1>
            <h2 className="text-yellow-500 indent-3">Cat{"'"}s blos</h2>
          </article>
        </section>

        {/* content */}
        <section>
          {blogs.length === 0 ? null : (
            <div className="grid grid-flow-row w-4/5 gap-y-20 auto-rows-fr">
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
  );
}

export default Blog;
