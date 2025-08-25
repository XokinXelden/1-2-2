import './App.css';
import { carsList } from './cars.const';
import { MarketBlock } from './components/MarketBlock';
import MarketElemetsCreater from './components/MarketBlock-elemetnCreate';

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
