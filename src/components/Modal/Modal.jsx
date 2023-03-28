import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onEscPress, children }) => {
  
  useEffect(() => {window.addEventListener('keydown', onEscPress);}, [onEscPress]);

    return createPortal(
      <div className={css.Overlay}>
        <div className={css.Modal}>{children}</div>
      </div>,
      modalRoot
    );
  }

Modal.propTypes = {
  onEscPress: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}
