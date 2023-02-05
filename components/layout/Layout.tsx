import React, { ReactNode } from 'react';

type Props = {
  childent: ReactNode;
};

function Layout({ childent }: Props) {
  return (
    <div>
      <section></section>

      <section>{childent}</section>

      <section></section>
    </div>
  );
}

export default Layout;
