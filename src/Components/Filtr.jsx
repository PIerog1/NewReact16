export default function Filtr({ filter, setFilter }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Szukaj produktu..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
    </div>
  );
}