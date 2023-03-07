import { blog } from '@/data/blogs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsFillCaretRightFill } from 'react-icons/bs';

interface blogItem {
  blog: blog;
}

function BlogItem({ blog }: blogItem) {
  return (
    <div className="grid grid-cols-[1fr,_3fr] drop-shadow-lg overflow-hidden bg-gray-200 hover:translate-x-1 hover:-translate-y-1 duration-200 ease-in-out shadow-md rounded-md ">
      <div className=''>
        <Image
          src={blog.img}
          width={400}
          height={400}  
          priority
          alt="cats"
          className="w-full h-full object-cover"
        />
      </div>

      {/* content */}
      <div>
        <article className="flex flex-col p-3 justify-between h-auto">
          <h3 className="text-lg text-yellow-600 font-semi">{blog.head}</h3>
          <p className="line-clamp-3 indent-5">
            {blog.subtitle || blog.contents}
          </p>
          <button className="btn-primary self-end ">
            <Link href={`/blogs/${blog.id}`} className="flex items-center">
              อ่านต่อ <BsFillCaretRightFill />
            </Link>
          </button>
        </article>
      </div>
    </div>
  );
}

export default BlogItem;
