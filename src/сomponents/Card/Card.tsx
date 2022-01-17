import React from 'react';

import './Card.scss';

interface ICard {
  info: {
    image: string;
    name: string;
    status: string;
    species: string;
  };
};

function Card({info}: ICard) {
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
};

export default Card;
