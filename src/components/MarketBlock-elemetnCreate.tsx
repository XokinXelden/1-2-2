import { carsList } from '../cars.const.ts';
import TextSticks from './MarketBlock-Name.tsx';
import { ButtonReserve } from './MarketBlock-ReserveButtun.tsx';
import { MarketSelectColor } from './MarketSelectColor.tsx';

const MarketElemetsCreater = () => {
  return (
    <>
      {carsList.map(
        ({ brand, model, year, price, сurrency, color, isReserved }, id) => {
          return (
            <div key={id} className="market_carElement">
              {TextSticks(brand, model)}
              {TextSticks(price, сurrency)}
              <p>{year}</p>
              {MarketSelectColor(color)}
              {ButtonReserve(isReserved)}
            </div>
          );
        }
      )}
    </>
  );
};

export default MarketElemetsCreater;
