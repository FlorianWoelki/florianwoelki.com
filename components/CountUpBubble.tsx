import { NextPage } from 'next';
import Link from 'next/link';
import CountUp from 'react-countup';
import { classes } from '../utils';

type CountUpBubbleColor = 'green' | 'purple' | 'blue';

interface CountUpBubbleProps {
  amount: number;
  title: string;
  color: CountUpBubbleColor;
  link: string;
}

const CountUpBubble: NextPage<CountUpBubbleProps> = ({
  amount,
  title,
  color,
  link,
}): JSX.Element => {
  const colorClasses = classes(
    {
      'from-yellow-500 to-teal-500': color === 'green',
      'from-purple-500 to-rose-500': color === 'purple',
      'from-green-500 to-blue-500': color === 'blue',
    },
    'cursor-pointer transition duration-300 ease-in-out inline-flex items-center justify-center p-1 rounded-full w-36 h-36 bg-gradient-to-tr hover:scale-105',
  );

  return (
    <a href={link} rel="noreferrer" target="_blank" className={colorClasses}>
      <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white">
        <CountUp
          className="text-2xl"
          useEasing={true}
          duration={5}
          end={amount}
          suffix="+"
        />
        <p className="text-sm text-gray-500">{title}</p>
      </div>
    </a>
  );
};

export default CountUpBubble;
