import { Dispatch, FC, SetStateAction, SyntheticEvent } from 'react';
import SearchInput from './searchinput/SearchInput';
import SelectInput from './selectinput/SelectInput';
import { DebouncedFunc } from 'lodash';

interface IProps {
  options: string[];
  filter: string;
  setFilter: Dispatch<SetStateAction<string>>;
  setSearch: DebouncedFunc<(e: SyntheticEvent) => void>;
}

const Controllers: FC<IProps> = ({ options, filter, setFilter, setSearch }) => {
  return (
    <>
      <div className="relative mt-6 flex flex-col justify-between md:flex-row">
        <SearchInput setSearch={setSearch} />
        <SelectInput
          value="Filter by Region"
          options={options}
          setFilter={setFilter}
          filter={filter}
        />
      </div>
    </>
  );
};

export default Controllers;
