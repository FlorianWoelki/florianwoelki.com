import { NextPage } from 'next';
import { classes } from '../../utils';

import type { JSX } from 'react';

export type TalkColor = 'green' | 'blue' | 'yellow';

interface TalkProps {
  title: string;
  description: string;
  link: string;
  date: string;
  color: TalkColor;
}

const Talk: NextPage<TalkProps> = ({
  title,
  description,
  link,
  date,
  color,
}): JSX.Element => {
  const colorClasses = classes(
    {
      'from-cyan-500 to-green-500': color === 'green',
      'from-blue-500 to-violet-500': color === 'blue',
      'from-yellow-500 to-orange-500': color === 'yellow',
    },
    'p-1 w-full lg:w-1/3 cursor-pointer rounded-xl bg-gradient-to-tr transition duration-300 ease-in-out transform hover:scale-105',
  );

  return (
    <a href={link} rel="noreferrer" className={colorClasses} target="_blank">
      <div
        className={`space-y-2 rounded-lg bg-white ${
          color ? 'flex h-full flex-col justify-between p-6' : ''
        }`}
      >
        <div className="flex flex-col space-y-2">
          <h2 className="inline text-xl font-bold tracking-tight">{title}</h2>
          <p className="text-gray-500">{description}</p>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-400">
          <span>{date}</span>
        </div>
      </div>
    </a>
  );
};

export default Talk;
