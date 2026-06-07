export default function StanTodo({ todos }) {
  const zrobione = todos.filter((t) => t.zrobione).length;
  const niezrobione = todos.length - zrobione;

  return (
    <div style={{ marginTop: 20 }}>
      <p>✅ Zrobione: {zrobione}</p>
      <p>⏳ Niezrobione: {niezrobione}</p>
    </div>
  );
}