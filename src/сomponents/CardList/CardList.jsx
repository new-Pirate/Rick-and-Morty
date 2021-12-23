import React from 'react';

import Card from '../Card/Card';
import './CardList.scss';

function CardList({cardList}) {
  return (
    <div className="cardList">
      {
        cardList.map((card) => {
          return <Card info={card} key={card.id} />;
        })
      }
    </div>
  );
}

export default CardList;
