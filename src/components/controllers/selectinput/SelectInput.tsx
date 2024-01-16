'use client';
import { useTheme } from 'next-themes';
import { Dispatch, FC, SetStateAction, SyntheticEvent, useEffect, useState } from 'react';
import React from 'react';
import { motion } from 'framer-motion';

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.2,
    },
    display: 'block',
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.1,
      delay: 0.1,
    },
    transitionEnd: {
      display: 'none',
    },
  },
};

interface IProps {
  value: string;
  options?: string[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
}

const SelectInput: FC<IProps> = ({ value, options, filter, setFilter }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = (e: SyntheticEvent) => {
    const el = e.target as HTMLDivElement;

    setFilter(el.innerText);

    setIsOpen(false);
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <div className="relative">
        <div
          className="bg-trasition mt-10 flex h-12 w-[200px] items-center justify-between rounded-[5px] bg-white
                    px-6 shadow-[0px_2px_9px_0px_rgba(0,0,0,0.05)] md:mt-0 md:h-14 md:hover:cursor-pointer dark:bg-HeaderDark"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-xs md:text-sm">{filter === '' ? value : filter}</span>
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.875 2.875L5 5.75L2.125 2.875L1.25 3.75L5 7.5L8.75 3.75L7.875 2.875Z"
                fill={theme === 'dark' ? 'white' : 'black'}
              />
            </svg>
          )}
        </div>
        <motion.div
          className="absolute top-[92px] z-50 flex w-[200px] flex-col gap-2 rounded-[5px] bg-white py-4 pl-6
                          pr-2 shadow-[0px_2px_9px_0px_rgba(0,0,0,0.05)] md:top-[60px] dark:bg-HeaderDark"
          initial="exit"
          animate={isOpen ? 'enter' : 'exit'}
          variants={subMenuAnimate}
        >
          <div
            className="mb-2 text-xs hover:cursor-pointer hover:text-hover md:text-sm"
            onClick={() => {
              setFilter('');
              setIsOpen(false);
            }}
          >
            Clear filter
          </div>
          {options?.map((item, index) => (
            <div
              key={index}
              className="text-xs hover:cursor-pointer hover:text-hover md:text-sm"
              onClick={clickHandler}
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default SelectInput;
