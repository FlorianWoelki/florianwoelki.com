import { NextPage } from 'next';

const NowPage: NextPage = (): JSX.Element => {
  return (
    <div className="container max-w-6xl px-8 pt-24 pb-32 mx-auto break-words lg:pt-32 md:px-16">
      <h1 className="mt-4 text-4xl font-bold tracking-tight">Now</h1>

      <p className="mt-10">What I am doing now.</p>
    </div>
  );
};

export default NowPage;
