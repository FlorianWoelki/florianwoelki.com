import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';
import GithubIcon from '../icons/github.svg';
import LinkedinIcon from '../icons/linkedin.svg';
import MenuIcon from '../icons/menu.svg';
import XIcon from '../icons/x.svg';

interface NavbarItem {
  title: string;
  link: string;
  extraChecks?: string[];
}

const Navbar: NextPage = () => {
  const items: NavbarItem[] = [
    { title: 'Home', link: '/' },
    // { title: 'Blog', link: '/blog', extraChecks: ['/blog/[slug]'] },
    { title: 'Projects', link: '/projects' },
    { title: 'List 100', link: '/list100' },
  ];
  const router = useRouter();

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-0 z-10 w-full py-4 bg-white border-b border-gray-100 bg-opacity-30 backdrop-blur-lg backdrop-filter firefox:bg-opacity-90">
      <div className="container flex items-center justify-between max-w-6xl px-8 mx-auto md:px-16">
        {/* Small screens icon */}
        <div
          className="text-gray-700 md:hidden"
          onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="w-5 h-5"></XIcon>
          ) : (
            <MenuIcon className="w-5 h-5"></MenuIcon>
          )}
        </div>

        {/* Large screens list */}
        <ul className="hidden md:flex md:space-x-6">
          {items.map((item, index) => (
            <li
              key={index}
              className={`transition duration-100 ease-in-out ${
                router.route === item.link ||
                item.extraChecks?.includes(router.route)
                  ? 'text-black'
                  : 'text-gray-500 hover:text-gray-400'
              }`}
            >
              <Link href={item.link} passHref className="block">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex space-x-6">
          <li className="text-gray-500 transition duration-100 ease-in-out hover:text-gray-400">
            <a
              href="https://github.com/FlorianWoelki/"
              rel="noreferrer"
              target="_blank"
              className="block"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
          </li>
          <li className="text-gray-500 transition duration-100 ease-in-out hover:text-gray-400">
            <a
              href="https://www.linkedin.com/in/florian-woelki/"
              rel="noreferrer"
              target="_blank"
              className="block"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
      {/* Small screens list */}
      <Transition
        show={isMenuOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ul className="absolute inset-x-0 top-0 px-8 py-6 mx-2 space-y-4 bg-white rounded shadow mt-14 md:hidden">
          {items.map((item, index) => (
            <li
              key={index}
              className={
                router.route === item.link ||
                item.extraChecks?.includes(router.route)
                  ? 'text-black'
                  : 'text-gray-500'
              }
              onClick={() => setMenuOpen(false)}
            >
              <Link href={item.link} passHref className="block">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  );
};

export default Navbar;
