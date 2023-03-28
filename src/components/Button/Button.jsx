import { Loader } from 'components/Loader/Loader';
import { useState, useEffect } from 'react';
import css from './Button.module.css';
import PropTypes from 'prop-types';

const baseUrl = 'https://pixabay.com/api';
const apiKey = '33430670-3151596af5f0d850f5d459d27';

export const Button = ({ searchQuery, onLoadMore }) => {
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setPage(1);
  }, [searchQuery]);

  const loadMore = () => {
    setIsLoading(true);

    fetch(
      `${baseUrl}/?q=${searchQuery}&page=${
        page + 1
      }&key=${apiKey}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(images => {
        onLoadMore(images.hits);
      })
      .finally(() => setIsLoading(false));

    setPage(prevstate => prevstate + 1);
  };

  if (isLoading) {
    return <Loader />;
  } else
    return (
      <button className={css.Button} onClick={loadMore}>
        Load more
      </button>
    );
};

Button.propTypes = {
  searchQuery: PropTypes.string.isRequired,
  onLoadMore: PropTypes.func.isRequired,
};
