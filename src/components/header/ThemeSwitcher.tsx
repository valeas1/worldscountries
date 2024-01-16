'use client';
import { FC } from 'react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const ThemeSwitcher: FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        className="flex items-center text-xs font-semibold text-black md:text-base dark:text-white"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {mounted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            className="mr-2 h-4 w-4 md:h-5 md:w-5"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M10.8426 11.052C7.73486 11.052 5.21543 8.74226 5.21543 5.89457C5.21543 4.82024 5.57343 3.82526 6.18514 3C3.75229 3.75612 2 5.86498 2 8.35045C2 11.4708 4.75943 14 8.16286 14C10.8743 14 13.1757 12.3945 14 10.1636C13.1 10.7238 12.0129 11.052 10.8426 11.052Z"
              fill="white"
              stroke={theme === 'dark' ? '#FFFFFF' : '#111517'}
            />
          </svg>
        )}
        Dark Mode
      </button>
    </>
  );
};

export default ThemeSwitcher;
