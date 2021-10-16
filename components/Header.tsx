import Link from 'next/link';

const Header = (): JSX.Element => {
  return (
    <header>
      <Link href="/">
        <h2>Blog</h2>
      </Link>
    </header>
  );
};

export default Header;
