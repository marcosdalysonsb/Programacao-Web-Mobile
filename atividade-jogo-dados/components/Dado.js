export default function Dado({ valor }) {
  return (
    <img
      src={`/dados/dado${valor}.png`}
      alt={`Dado mostrando ${valor}`}
      className="dado"
    />
  );
}
