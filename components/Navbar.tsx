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
    { title: 'Now', link: '/now' },
    { title: 'Blog', link: '/blog', extraChecks: ['/blog/[slug]'] },
    {
      title: 'Resume',
      link: 'https://github.com/FlorianWoelki/florianwoelki.com/raw/main/pdf/resume.pdf',
    },
    { title: 'Projects', link: '/projects' },
    { title: 'List 100', link: '/list100' },
  ];
  const router = useRouter();

  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div className="fixed top-0 z-10 w-full border-b border-gray-100 bg-white bg-opacity-30 py-4 backdrop-blur-lg backdrop-filter firefox:bg-opacity-90">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-8 md:px-16">
        {/* Small screens icon */}
        <div
          className="text-gray-700 md:hidden"
          onClick={() => setMenuOpen((isMenuOpen) => !isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="h-5 w-5"></XIcon>
          ) : (
            <MenuIcon className="h-5 w-5"></MenuIcon>
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
              <Link href={item.link} passHref>
                <a className="block">{item.title}</a>
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
              <GithubIcon className="h-5 w-5" />
            </a>
          </li>
          <li className="text-gray-500 transition duration-100 ease-in-out hover:text-gray-400">
            <a
              href="https://www.linkedin.com/in/florian-woelki/"
              rel="noreferrer"
              target="_blank"
              className="block"
            >
              <LinkedinIcon className="h-5 w-5" />
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
        <ul className="absolute inset-x-0 top-0 mx-2 mt-14 space-y-4 rounded bg-white px-8 py-6 shadow md:hidden">
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
              <Link href={item.link} passHref>
                <a className="block">{item.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Transition>
    </div>
  );
};

export default Navbar;
