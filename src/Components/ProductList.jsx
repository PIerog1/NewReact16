export default function ProductList({ filter }) {
  const produkty = ["Laptop", "Myszka", "Klawiatura", "Monitor"];

  const filtrowane = produkty.filter((p) =>
    p.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <ul>
        {filtrowane.map((produkt, index) => (
          <li key={index}>{produkt}</li>
        ))}
      </ul>
    </div>
  );
}