import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Searchbar from '../Searchbar';
import { log } from 'console';

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const isClient = typeof window === 'object';
  const windowRef: any = useRef(isClient ? window : null);

  useEffect(() => {
    if (!isClient) {
      return;
    }
    const handleScroll = () => {
      const currentScrollPos = windowRef.current.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;
      setPrevScrollPos(currentScrollPos);
      setVisible(visible);
    };
    windowRef.current.addEventListener('scroll', handleScroll);
    return () => {
      windowRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos, isClient]);

  console.log(visible);

  return (
    <div
      className={`bg-white sticky flex-[0_0_auto] ${
        visible ? 'top-0' : '-top-[87px]'
      } z-50 shadow-md transition-all duration-300`}
    >
      <div>
        {/* top bar */}
        <div className="border-b pb-2">
          <div className="container mx-auto">
            <div className=" flex flex-row items-center justify-between">
              {/* logo */}
              <section className="flex">
                <div className="">
                  <Image
                    src={`/logo/logo_cat.png`}
                    width={100}
                    height={100}
                    alt="cats"
                    priority
                    className="md:w-20 w-14"
                  />
                </div>
                <div className="self-end ">
                  <h2 className="space-x-2 hidden sm:block sm:text-sm md:text-lg lg:text-4xl">
                    <span className="text-sky-500">kitten</span>
                    <span className="text-yellow-500">queen</span>
                  </h2>
                </div>
              </section>

              {/* search bar */}
              <section>
                <Searchbar />
              </section>
            </div>
          </div>
        </div>

        {/* topbar end */}

        {/* nav bar */}
        <div className="shadow-md">
          {/* navigation list items */}
          <ul className="w-max py-3 grid grid-flow-col mx-auto">
            <NavItem href="/" content="หน้าเเรก" />
            <NavItem href="/cats" content="10 Cats" />
            <NavItem href="/blogs" content="บทความ" />
          </ul>
        </div>
      </div>
    </div>
  );
}

interface navItem {
  href: string;
  content: string;
}
const NavItem = ({ href, content }: navItem) => {
  return (
    <li className="px-3 hover:bg-slate-200 ease-in duration-200 transition-colors hover:text-yellow-600 rounded-full">
      <Link href={href}>{content}</Link>
    </li>
  );
};

export default Navbar;
