import React from 'react';

import Card from '../Card/Card';
import './CardList.scss';
import { ICard } from '../../types/tupes';

interface ICardList {
  cardList: ICard[];
};

function CardList({ cardList }: ICardList) {
  return (
    <div className="cardList">
      {
        cardList.map((card) => {
          return <Card info={card} key={card.id} />;
        })
      }
    </div>
  );
};

export default CardList;
