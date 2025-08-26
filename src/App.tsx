import './App.css';
import { carsList } from './cars.const';
import { MarketBlock } from './components/marketBlockHeader';
import MarketElemetsCreater from './components/marketBlockElemetnCreate';

function App() {
  console.log(carsList);
  return (
    <>
      <section className="marketBlock">
        <MarketBlock />
        <MarketElemetsCreater />
      </section>
    </>
  );
}

export default App;
