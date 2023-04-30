import React from 'react';
import './InfoTooltip.css';

function InfoTooltip({ isOpen, onClose, onOverlayClick, message, statusIcon }) {
  return (
    <div
      className={`info-tooltip ${isOpen ? 'info-tooltip_opened' : ''}`}
      onClick={onOverlayClick}
      onClose={onClose}>
      <div className='info-tooltip__container'>
        <button
          className='info-tooltip__close-icon'
          type='button'
          aria-label='Закрыть'
          onClick={onClose}></button>
        <img
          className='info-tooltip__image'
          alt='Статус регистрации'
          src={statusIcon}
        />
        <h2 className='info-tooltip__title'>{message}</h2>
      </div>
    </div>
  );
}

export default InfoTooltip;
