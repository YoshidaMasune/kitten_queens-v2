import React, { ReactElement } from 'react';
import Footer from './utils/Footer';
import Navbar from './utils/Navbar';

interface Props {
  children: ReactElement | any;
}

function Layout({ children }: Props) {
  return (
    <div className="min-h-screen max-h-auto flex flex-col">
      {/* nav */}
      {/* className="flex-[0_0_auto]" */}
      <Navbar />
      {/* nav */}

      {/* content */}
      <section className="flex-[1_0_auto]">{children}</section>

      {/* footer */}
      <section className="flex-0_0_auto]">
        <Footer />
      </section>
    </div>
  );
}

export default Layout;
