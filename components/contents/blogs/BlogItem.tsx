import { blog } from '@/data/blogs';
import Image from 'next/image';
import React from 'react';

interface blogItem {
  blog: blog;
}

function BlogItem({ blog }: blogItem) {
  return (
    <div className="grid grid-cols-[1fr_3fr] shadow-md rounded-md overflow-hidden">
      <div>
        <Image
          src={`/cats/persian/06.png`}
          width={400}
          height={400}
          priority
          alt="cats"
          className="w-full h-full object-cover"
        />
      </div>

      {/* content */}
      <div>
        <article className="flex flex-col justify-between h-auto">
          <h3 className="text-lg">{blog.head}</h3>
          <p className="line-clamp-3 indent-5">
            {blog.subtitle || blog.contents}
          </p>
          <button className="btn-primary self-end ">อ่านต่อ</button>
        </article>
      </div>
    </div>
  );
}

export default BlogItem;
