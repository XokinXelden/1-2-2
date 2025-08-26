export function ButtonReserve(bool) {
  return (
    <>
      {bool ? (
        <button className="btnMarket">Забронировать</button>
      ) : (
        <button className="btnMarket" disabled>Зарезервирован</button>
      )}
    </>
  );
}
