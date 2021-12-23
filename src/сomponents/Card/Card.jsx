import React from 'react';

import './Card.scss';

function Card({info}) {
  return (
    <div className="card">
      <img
        src={info.image}
        className='card__img'
        alt='картинка'
      />
      <div className='card__tooltip'>
        <p>{info.name}</p>
        <p>{info.status}</p>
        <p>{info.species}</p>
      </div>
    </div>
  );
}

export default Card;
