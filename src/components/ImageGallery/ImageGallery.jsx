import { Button } from 'components/Button/Button';
import { useState, useEffect } from 'react';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';

import css from './ImageGallery.module.css';

const baseUrl = 'https://pixabay.com/api';
const apiKey = '33430670-3151596af5f0d850f5d459d27';

export const ImageGallery = ({ searchQuery }) => {
  const [images, setImages] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    setIsLoading(true);

    fetch(
      `${baseUrl}/?q=${searchQuery}&page=1&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(images => {
        setImages(images.hits);
      })
      .finally(() => setIsLoading(false));
  }, [searchQuery]);

  const onLoadMore = loadMoreImages => {
    setImages(prevstate => [...prevstate, ...loadMoreImages]);
  };

  if (isLoading) {
    return <Loader />;
  } else
    return (
      <>
        <ul className={css.ImageGallery}>
          {images &&
            images.map(image => (
              <ImageGalleryItem image={image} key={image.id} />
            ))}
        </ul>
        {images && <Button searchQuery={searchQuery} onLoadMore={onLoadMore} />}
      </>
    );
};

ImageGallery.propTypes = {
  searchQuery: PropTypes.string,
};
