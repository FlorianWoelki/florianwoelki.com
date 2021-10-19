import { NextPage } from 'next';

const Footer: NextPage = (): JSX.Element => {
  return (
    <div className="container max-w-6xl px-8 mx-auto space-y-8 text-gray-400 md:px-16">
      <div className="w-full border border-gray-100"></div>
      <p>© 2021 Florian Woelki</p>
    </div>
  );
};

export default Footer;
