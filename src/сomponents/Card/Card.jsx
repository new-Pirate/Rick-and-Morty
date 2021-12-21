import './Card.scss';

import rick from '../../img/rick.jpg'

function Card() {
  return (
    <div className="card">
      <img
        src={rick}
        className='card__img'
        alt='картинка'
      />
      <div className='card__tooltip'>
        <p>NameNameNPPPame</p>
        <p>Status</p>
        <p>Species</p>
      </div>
    </div>
  );
}

export default Card;
