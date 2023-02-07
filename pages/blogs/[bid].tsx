import Layout from '@/components/layout/Layout';
import SidebarBlogs from '@/components/layout/utils/SidebarBlogs';
import { blog } from '@/data/blogs';
import { getBlog } from '@/data/fetchdata/getData';

import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

function Bid() {
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<blog>();
  const { bid } = useRouter().query;

  useEffect(() => {
    setLoading(true);
    if (bid === undefined) {
      return;
    } else {
      setBlog(getBlog(Number(bid)));
      setLoading(false);
    }
  }, [bid]);

  return (
    <div>
      <Layout>
        {loading ? null : (
          <div className=" grid grid-cols-1 md:grid-cols-[2fr,_1fr] mt-20 container lg:w-3/5 mx-auto gap-x-3 px-4">
            {/* content */}
            <div className=" flex flex-col">
              {/* head title */}
              <article className="border-b mb-20">
                <h2 className="text-sky-700 text-4xl">{blog?.head}</h2>
              </article>

              {/* blog contents */}
              <div className=" ml-6 leading-[2.5rem] text-slate-800 text-lg tracking-wider">
                {/* sub content */}
                <div className="indent-5">
                  <p>{blog?.subtitle}</p>
                </div>

                {/* contents */}
                <div className="space-y-7 mt-10">
                  {blog?.contents?.map((data, index) => {
                    return (
                      <p key={index} className="indent-4">
                        {data}
                      </p>
                    );
                  })}
                </div>

                {/* content Blogs */}
                <div className="space-y-10">
                  {blog?.contentBlogs?.map((data, index) => {
                    return (
                      <div key={index}>
                        <p className="text-xl">{data.title}</p>
                        <p className="indent-10">{data.content}</p>
                      </div>
                    );
                  })}
                </div>

                {/* content List */}

                <div>
                  {blog?.contentLists?.map((data, index) => {
                    return (
                      <div key={index}>
                        <p className="text-lg">{data.title}</p>
                        <div className="ml-3 space-y-5 mt-2">
                          {data.content.map((data, index) => {
                            return (
                              <div key={index}>
                                <span>{index + 1}.</span>
                                <span className="ml-5">{data}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* image  */}
                <div className=" my-10">
                  <img src={`/cats/Bengal/04.jpg`} alt="" />
                </div>

                <div className=" my-20">
                  <a
                    className="line-clamp-1 text-sky-700 hover:text-red-400"
                    href={`${blog?.cradit}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>ที่มา:</span>
                    <span className="">{blog?.cradit.slice(0, 30)}...</span>
                  </a>
                </div>
              </div>
            </div>

            {/* sidbar */}
            <div className="border-l pl-5 hidden md:block">
              <SidebarBlogs />
            </div>
          </div>
        )}

        {/* aside */}
      </Layout>
    </div>
  );
}

export default Bid;
