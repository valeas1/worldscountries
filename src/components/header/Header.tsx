import { FC } from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import Link from 'next/link';

const Header: FC = () => {
  return (
    <>
      <header
        className="bg-trasition bg-white px-4 py-8 
                        shadow-[0px_2px_4px_0px_rgba(0,0,0,0.06)] dark:bg-HeaderDark"
      >
        <div className="mx-auto flex max-w-7xl justify-between">
          <Link href="/">
            <span className="text-sm font-extrabold text-black md:text-2xl dark:text-white">
              Where in the world?
            </span>
          </Link>
          <ThemeSwitcher />
        </div>
      </header>
    </>
  );
};

export default Header;
