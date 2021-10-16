import { NextPage } from 'next';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

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
              router.pathname === item.link ? 'text-white' : 'text-gray-300'
            }`}
          >
            <Link href={item.link} passHref>
              <a className="block">{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
