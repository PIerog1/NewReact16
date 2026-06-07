import { useState } from "react";

export default function ToDoForm({ dodajTodo }) {
  const [tekst, setTekst] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tekst.trim()) return;

    dodajTodo(tekst);
    setTekst("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={tekst}
        onChange={(e) => setTekst(e.target.value)}
        placeholder="Dodaj zadanie..."
      />
      <button type="submit">Dodaj</button>
    </form>
  );
}