import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
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
    { title: 'Blog', link: '/blog', extraChecks: ['/blog/[slug]'] },
    {
      title: 'Resume',
      link: 'https://github.com/FlorianWoelki/florianwoelki.com/raw/master/pdf/new_resume.pdf',
    },
    { title: 'Contact', link: '/contact' },
    { title: 'Projects', link: '/projects' },
  ];
  const router = useRouter();

  const [isMenuOpen, setMenuOpen] = useState<boolean>(true);

  return (
    <div className="fixed top-0 z-10 w-full py-4 bg-white border-b border-gray-100 backdrop-filter backdrop-blur-lg bg-opacity-30 firefox:bg-opacity-90">
      <div className="container flex items-center justify-between max-w-6xl px-8 mx-auto md:px-16">
        {/* Small screens */}
        <div
          className="text-gray-700 md:hidden"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <XIcon className="w-5 h-5"></XIcon>
          ) : (
            <MenuIcon className="w-5 h-5"></MenuIcon>
          )}
        </div>

        {/* Large screens */}
        <ul className="hidden md:flex md:space-x-6">
          {items.map((item, index) => (
            <li
              key={index}
              className={`transition duration-100 ease-in-out hover:text-gray-500 ${
                router.route === item.link ||
                item.extraChecks?.includes(router.route)
                  ? 'text-black'
                  : 'text-gray-700'
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
            <a href="#" target="_blank" className="block">
              <GithubIcon className="w-5 h-5" />
            </a>
          </li>
          <li className="text-gray-500 transition duration-100 ease-in-out hover:text-gray-400">
            <a href="#" target="_blank" className="block">
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </li>
        </ul>

        {isMenuOpen && (
          <ul className="absolute inset-x-0 top-0 px-8 py-6 mx-2 space-y-4 bg-white rounded shadow mt-14 md:hidden">
            {items.map((item, index) => (
              <li
                key={index}
                className={
                  router.route === item.link ||
                  item.extraChecks?.includes(router.route)
                    ? 'text-black'
                    : 'text-gray-700'
                }
                onClick={() => setMenuOpen(false)}
              >
                <Link href={item.link} passHref>
                  <a className="block">{item.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
