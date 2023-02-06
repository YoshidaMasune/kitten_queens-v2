import { blog } from '@/data/blogs';
import getData from '@/data/fetchdata/getData';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';

function SidebarBlogs() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [blogs, setBlogs] = useState<Array<blog | any>>([]);
  const isClient = typeof window === 'object';
  const windowRef: any = useRef(isClient ? window : null);

  useEffect(() => {
    setBlogs(getData('blogs'));
  }, []);
  return (
    <div className="sticky top-[200px]">
      <div>
        <article>
          <h1>บทความอื่นๆ</h1>
        </article>
        <ul>
          {blogs.length === 0
            ? null
            : blogs.map((blog, index) => {
                return (
                  <li key={index}>
                    <Link href={`/blogs/${blog.id}`} className="line-clamp-1">
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
