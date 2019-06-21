import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/fontawesome-free-solid';

const Modal = ({ handleClose, show, children }) => {
  const showHideClass = show ? 'modal display-block' : 'modal display-none';
  return (
    <div className={showHideClass}>
      <section className="modal-main">
        <button type="button" onClick={handleClose} className="closeModal">
          <FontAwesomeIcon icon={faWindowClose} size="2x" />
        </button>
        {children}
      </section>
    </div>
  );
};

// const container = document.createElement('div');
// document.body.appendChild(container);
export default Modal;
