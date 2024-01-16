import { FC, SyntheticEvent } from 'react';
import SearchIcon from '../components/SearchIcon';
import { DebouncedFunc } from 'lodash';

interface IProps {
  setSearch: DebouncedFunc<(e: SyntheticEvent) => void>;
}

const SearchInput: FC<IProps> = ({ setSearch }) => {
  return (
    <>
      <div
        className="bg-trasition flex h-12 w-full items-center rounded-[5px] bg-white shadow-[0px_2px_9px_0px_rgba(0,0,0,0.05)] md:h-14
                      md:w-[36%] dark:bg-HeaderDark"
      >
        <SearchIcon />
        <input
          className="h-full w-full bg-transparent text-xs outline-none placeholder:font-normal
                    placeholder:text-textPlaceholder md:text-sm dark:placeholder:text-white"
          placeholder="Search for a country…"
          onChange={setSearch}
        />
      </div>
    </>
  );
};

export default SearchInput;
