import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Searchbar from '../Searchbar';

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

  return (
    <div
      className={`bg-white sticky flex-[0_0_auto] ${
        visible ? 'top-0 ' : 'md:-top-[87px] -top-[60px]'
      } z-50 shadow-sm shadow-slate-100 transition-all duration-300`}
    >
      <div>
        {/* top bar */}
        <div className="border-b pb-2">
          <div className="container mx-auto">
            <div className=" flex flex-row items-center justify-between">
              {/* logo */}
              <Link href={`/`}>
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
                    <h2 className="space-x-2 hidden sm:block sm:text-sm md:text-lg lg:text-xl">
                      <span className="text-sky-500">kitten</span>
                      <span className="text-yellow-500">queen</span>
                    </h2>
                  </div>
                </section>
              </Link>

              {/* search bar */}
              <section>
                <Searchbar />
              </section>
            </div>
          </div>
        </div>

        {/* topbar end */}

        {/* nav bar */}
        <div
          className={`shadow-md ${
            !visible ? 'bg-sky-100' : 'bg-gray-50'
          } transition-colors duration-700 ease-linear`}
        >
          {/* navigation list items */}
          <ul className="w-max py-3 grid grid-flow-col mx-auto">
            <NavItem href="/" content="????????????????????????" />
            <NavItem href="/cats" content="10 Cats" />
            <NavItem href="/blogs" content="??????????????????" />
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
    <li className="px-3 hover:bg-slate-200 font-medium text-sm lg:text-lg ease-in duration-200 transition-colors hover:text-yellow-600 rounded-full">
      <Link href={href}>{content}</Link>
    </li>
  );
};

export default Navbar;
