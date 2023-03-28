import css from './ImageGalleryItem.module.css';
import { Modal } from 'components/Modal/Modal';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevstate => !prevstate);
  };

  const onEscPress = event => {
    if (event.code === 'Escape') {
      setShowModal(false);
    }
  };

  return (
    <li className={css.ImageGalleryItem} onClick={toggleModal}>
      <img
        src={image.webformatURL}
        alt={image.tags}
        className={css.ImageGalleryItem_image}
      />
      {showModal && (
        <Modal onClick={toggleModal} onEscPress={onEscPress}>
          <img src={image.largeImageURL} alt={image.tags} width="800px" />
        </Modal>
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
};
