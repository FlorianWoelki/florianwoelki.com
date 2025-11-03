import { NextPage } from 'next';
import Link from 'next/link';

import type { JSX } from 'react';

const Footer: NextPage = (): JSX.Element => {
  return (
    <div className="container mx-auto max-w-6xl space-y-8 px-8 pb-20 text-gray-400 md:px-16">
      <div className="w-full border border-gray-100"></div>
      <div className="flex items-center justify-between">
        <p>© 2025 Florian Woelki</p>
        <Link href="/imprint" className="underline">
          Imprint
        </Link>
      </div>
    </div>
  );
};

export default Footer;
