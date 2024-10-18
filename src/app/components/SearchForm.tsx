'use client';
import React, { FormEvent, ChangeEvent } from 'react';

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchFormProps {
  searchTerm: string;
  onSearchTermChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch: (e: FormEvent<HTMLFormElement>) => void;
}
export const SearchForm = ({
  searchTerm,
  onSearchTermChange,
  onSearch,
}: SearchFormProps) => {
  return (
    <form className='flex items-center space-x-2' onSubmit={onSearch}>
      <button type='submit'>
        <MagnifyingGlassIcon className='h-6 w-6 text-gray-400' />
      </button>
      <input
        type='search'
        name='search'
        id='search'
        placeholder='Search'
        value={searchTerm}
        onChange={onSearchTermChange}
        className='bg-transparent text-white placeholder-white outline-none'
      />
    </form>
  );
};
