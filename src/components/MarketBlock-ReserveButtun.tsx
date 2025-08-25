export function ButtonReserve(bool) {
  return (
    <>
      {bool ? (
        <button>Забронировать</button>
      ) : (
        <button disabled>Забронировать</button>
      )}
    </>
  );
}
