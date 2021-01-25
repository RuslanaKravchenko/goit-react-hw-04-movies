import React, { useState } from 'react';
import SearchFormStyled from './SearchFormStyled';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = e => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit(searchQuery);
    setSearchQuery('');
  };
  return (
    <SearchFormStyled className="Searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          onChange={handleChange}
          value={searchQuery}
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
      </form>
    </SearchFormStyled>
  );
};

export default SearchForm;
