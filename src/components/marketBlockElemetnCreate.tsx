import { carsList } from '../cars.const.ts';
import TextSticks from './marketBlockName.tsx';
import { ButtonReserve } from './marketBlockReserveButtun.tsx';
import { MarketSelectColor } from './marketSelectColor.tsx';

const MarketElemetsCreater = () => {
  if (carsList.length === 0) return (
    <p>Автомобили не найдены</p>
  )
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
