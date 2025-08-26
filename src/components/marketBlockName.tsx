export default function TextSticks(...args) {
  return <p>{[...args].join(' ')}</p>;
}
