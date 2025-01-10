import { NextPage } from 'next';
import list100 from '../assets/list100.json';

const List100Page: NextPage = (): JSX.Element => {
  return (
    <div className="container mx-auto max-w-6xl break-words px-8 pt-24 pb-32 md:px-16 lg:pt-32">
      <h2 className="mt-4 text-4xl font-bold tracking-tight">
        List 100 - Bucket List
      </h2>

      <p className="mt-10">
        Things I want to do before I die.{' '}
        <i>(Progress as of January 10, 2025)</i>
      </p>

      <ul className="mt-6 grid grid-cols-1 space-y-1 sm:grid-cols-2 sm:gap-4 sm:space-y-0">
        <div className="space-y-1">
          {list100.slice(0, list100.length / 2).map((bucket, index) => (
            <li key={index} className="space-x-2">
              <b
                className={`${bucket.done ? 'text-blue-500' : 'text-red-500'}`}
              >
                {bucket.done ? (
                  <del>{index + 1}</del>
                ) : (
                  <span>{index + 1}</span>
                )}
              </b>
              <span>{bucket.name}</span>
            </li>
          ))}
        </div>
        <div className="space-y-1">
          {list100
            .slice(list100.length / 2, list100.length)
            .map((bucket, index) => (
              <li key={index} className="space-x-2">
                <b
                  className={`${
                    bucket.done ? 'text-blue-500' : 'text-red-500'
                  }`}
                >
                  {bucket.done ? (
                    <del>{index + Math.floor(list100.length / 2) + 1}</del>
                  ) : (
                    <span>{index + Math.floor(list100.length / 2) + 1}</span>
                  )}
                </b>
                <span>{bucket.name}</span>
              </li>
            ))}
        </div>
      </ul>
    </div>
  );
};

export default List100Page;
