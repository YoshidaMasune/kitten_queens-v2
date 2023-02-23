import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Searchbar from '../Searchbar';

function Footer() {
  return (
    <div className="mt-64 bg-sky-700 p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[10vh] gap-y-5 content-center justify-items-center lg:w-3/5 mx-auto">
        <section>
          <ul className="flex gap-3 text-white">
            <FootLink herf="/" content="หน้าเเรก" />
            <FootLink herf="/cats" content="top 10" />
            <FootLink herf="/blogs" content="บทความ" />
          </ul>
        </section>
        <section className="flex flex-col">
          <Searchbar />
          <Image
            src={`/logo/logo_cat.png`}
            width={500}
            height={500}
            priority
            alt="cats"
            className="w-32 lg:w-40 self-center lg:self-end"
          />
        </section>
      </div>
    </div>
  );
}

interface footLink {
  herf: string;
  content: string;
}

const FootLink = ({ herf, content }: footLink) => {
  return (
    <li className="text-white">
      <Link href={herf}>{content}</Link>
    </li>
  );
};

export default Footer;
