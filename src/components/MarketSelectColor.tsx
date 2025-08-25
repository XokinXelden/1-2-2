export function MarketSelectColor(ArrColor) {
  return (
    <select className="colorSelector">
      {ArrColor.map((color) => {
        return <option>{color}</option>;
      })}
    </select>
  );
}
