import { NextPage } from 'next';
import { classes } from '../utils';

interface TagProps {
  selected: boolean;
}

const Tag: NextPage<TagProps> = ({ selected, children }): JSX.Element => {
  const tagClasses = classes(
    {
      'bg-blue-300 text-blue-800': selected,
      'bg-gray-200 text-gray-600 dark:text-gray-900 dark:bg-gray-500':
        !selected,
    },
    'px-3 py-1 mt-1 mr-1 text-sm rounded-lg cursor-pointer',
  );

  return <div className={tagClasses}>{children}</div>;
};

export default Tag;
