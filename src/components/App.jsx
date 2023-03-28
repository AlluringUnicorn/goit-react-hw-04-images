import { useState } from 'react';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Searchbar } from './Searchbar/Searchbar';
import css from './App.module.css';

export const App = ()=> {

  const [searchQuery, setSearchQuery] = useState(null);

  const onFormSubmit = value => {
    setSearchQuery(value);
  };

    return (
      <div className={css.App}>
        <Searchbar onSubmit={onFormSubmit} />
        <ImageGallery searchQuery={searchQuery} />
      </div>
    );
  }
