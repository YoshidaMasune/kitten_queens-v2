import { useRouter } from 'next/router';
import React from 'react';

function Bid() {
  const router = useRouter();
  const { bid } = router.query;

  return <div>Bid</div>;
}

export default Bid;
