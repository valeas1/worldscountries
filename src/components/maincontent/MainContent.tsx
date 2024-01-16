'use client';
import { FC, SyntheticEvent, useEffect, useMemo, useState } from 'react';
import Controllers from '../controllers/Controllers';
import Countries from './Countries';
import { IState } from '@/types';
import debouce from 'lodash.debounce';

interface IProps {
  state: IState[];
  regions: string[];
}

const MainContent: FC<IProps> = ({ state, regions }) => {
  const [countries, setCountries] = useState<IState[]>();

  const [filter, setFilter] = useState('');

  const [search, setSearch] = useState('');

  const changeHandler = (e: SyntheticEvent) => {
    const el = e.target as HTMLInputElement;
    setSearch(el.value);
  };

  const debouncedResults = useMemo(() => {
    return debouce(changeHandler, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  useEffect(() => {
    if (search !== '') {
      setCountries(
        state.filter((item) =>
          item.name.common.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()),
        ),
      );
    } else {
      setCountries(state);
    }

    if (filter !== '') {
      setCountries(state.filter((item) => item.region === filter));
    }

    if (filter !== '' && search !== '') {
      setCountries(
        state
          .filter((item) => item.region === filter)
          .filter((item) =>
            item.name.common.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()),
          ),
      );
    }
  }, [search, filter]);

  useEffect(() => {
    setCountries(state);
  }, []);

  return (
    <>
      <Controllers
        options={regions}
        setFilter={setFilter}
        filter={filter}
        setSearch={debouncedResults}
      />
      <Countries state={countries} />
    </>
  );
};

export default MainContent;
