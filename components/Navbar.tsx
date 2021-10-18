import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import GithubIcon from '../icons/github.svg';
import LinkedinIcon from '../icons/linkedin.svg';

interface NavbarItem {
  title: string;
  link: string;
}

export const Navbar: NextPage = () => {
  const items: NavbarItem[] = [
    { title: 'About', link: '/about' },
    { title: 'Blog', link: '/' },
    { title: 'Resume', link: '/resume' },
    { title: 'Contact', link: '/contact' },
    { title: 'Projects', link: '/projects' },
  ];
  const router = useRouter();

  return (
    <div className="fixed flex items-center justify-between w-full px-8 py-4 bg-gray-900">
      <ul className="flex space-x-6">
        {items.map((item, index) => (
          <li
            key={index}
            className={`transition duration-100 ease-in-out hover:text-gray-400 ${
              router.pathname === item.link ||
              router.pathname.includes(item.link)
                ? 'text-white'
                : 'text-gray-300'
            }`}
          >
            <Link href={item.link} passHref>
              <a className="block">{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>

      <ul className="flex space-x-6">
        <li className="text-gray-300 transition duration-100 ease-in-out hover:text-gray-400">
          <a href="#" target="_blank" className="block">
            <GithubIcon className="w-5 h-5" />
          </a>
        </li>
        <li className="text-gray-300 transition duration-100 ease-in-out hover:text-gray-400">
          <a href="#" target="_blank" className="block">
            <LinkedinIcon className="w-5 h-5" />
          </a>
        </li>
      </ul>
    </div>
  );
};
