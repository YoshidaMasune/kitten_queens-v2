import { blog } from '@/data/blogs';
import getData from '@/data/fetchdata/getData';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

function SidebarBlogs() {
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const isClient = typeof window === 'object';
  // const windowRef: any = useRef(isClient ? window : null);
  const [blogs, setBlogs] = useState<Array<blog | any>>([]);

  useEffect(() => {
    setBlogs(getData('blogs'));
  }, []);

  return (
    <div className="sticky top-[200px] text-slate-900">
      {/* head of sidebar */}
      <div>
        <article>
          <h1 className="text-2xl">บทความอื่นๆ</h1>
        </article>
        <ul className="ml-4 space-y-5 mt-5">
          {blogs.length === 0
            ? null
            : blogs.map((blog, index) => {
                return (
                  <li
                    className="border-b hover:indent-10 duration-300"
                    key={index}
                  >
                    <Link href={`/blogs/${blog.id} `} className="line-clamp-1">
                      {blog.head}
                    </Link>
                  </li>
                );
              })}
        </ul>
      </div>
    </div>
  );
}

export default SidebarBlogs;
