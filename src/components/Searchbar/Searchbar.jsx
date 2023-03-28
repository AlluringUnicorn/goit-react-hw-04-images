import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './Searchbar.module.css';

export const Searchbar = ({onSubmit})=> {

  const [value, setValue] = useState('');

  const handleChange = ({ target }) => {
    setValue(target.value);
  };

    return (
      <header className={css.Searchbar}>
        <form
          className={css.SearchForm}
          onSubmit={event => {
            event.preventDefault();
            onSubmit(value);
            setValue('');
          }}
        >
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
            onChange={handleChange}
          />
        </form>
      </header>
    );
  }

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
