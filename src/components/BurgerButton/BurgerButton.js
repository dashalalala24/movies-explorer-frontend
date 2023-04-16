import React from 'react';
import './BurgerButton.css';

function BurgerButton({ isBurgerActive, onOpenMenu }) {
  return (
    <div
      className={`burger-button ${isBurgerActive ? 'burger-button_active' : ''}`}
      onClick={onOpenMenu}>
      <span className='burger-button__line'></span>
      <span className='burger-button__line'></span>
      <span className='burger-button__line'></span>
    </div>
  );
}

export default BurgerButton;
