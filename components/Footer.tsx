import { NextPage } from 'next';

import type { JSX } from "react";

const Footer: NextPage = (): JSX.Element => {
  return (
    <div className="container mx-auto max-w-6xl space-y-8 px-8 pb-20 text-gray-400 md:px-16">
      <div className="w-full border border-gray-100"></div>
      <p>© 2021 Florian Woelki</p>
    </div>
  );
};

export default Footer;
