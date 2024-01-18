'use client';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

const BackButton: FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <button
        className="bg-trasition flex h-8 w-28 items-center justify-center rounded-[5px] bg-white text-sm
                        font-light shadow-[0px_0px_7px_0px_rgba(0,0,0,0.29)] dark:bg-HeaderDark "
        onClick={() => router.back()}
      >
        <div className="flex w-[25%] items-center justify-center">
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="mr-2"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.81802 3.6967L6.87868 4.75736L3.3785 8.25754H16.7428L16.7428 9.74246H3.3785L6.87868 13.2426L5.81802 14.3033L0.514719 9L5.81802 3.6967Z"
                fill={theme === 'dark' ? 'white' : '#111517'}
              />
            </svg>
          )}
        </div>
        <span className="">Back</span>
      </button>
    </>
  );
};

export default BackButton;
