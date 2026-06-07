export default function ListaTodo({ todos, toggleTodo }) {
  return (
    <div style={{ marginTop: 20 }}>
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            display: "flex",
            gap: 10,
            marginBottom: 8,
            textDecoration: todo.zrobione ? "line-through" : "none",
          }}
        >
          <span>{todo.tekst}</span>

          <button onClick={() => toggleTodo(todo.id)}>
            {todo.zrobione ? "Cofnij" : "Zrobione"}
          </button>
        </div>
      ))}
    </div>
  );
}