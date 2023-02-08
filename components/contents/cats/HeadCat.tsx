import React, { useEffect, useRef, useState } from 'react';

function HeadCat() {
  const [visible, setVisible] = useState(true);
  const isClient = typeof window === 'object';
  const windowRef: any = useRef(isClient ? window : null);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

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
    <header
      className={`flex h-32 duration-300 sticky items-center z-10  justify-center from-sky-200 to-yellow-100 bg-gradient-to-br`}
    >
      <article className="text-center">
        <h1 className={`text-4xl font-medium text-slate-900`}>top 10 cats</h1>
      </article>
    </header>
  );
}

export default HeadCat;
