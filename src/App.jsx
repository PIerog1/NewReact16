import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Filtr from "./Components/Filtr";
import ProductList from "./Components/ProductList";
import ToDoForm from "./Components/ToDoForm";
import ToDoList from "./Components/ToDoList";
import ToDoStan from "./Components/ToDoStan";

export default function App() {
  const [filter, setFilter] = useState("");
  const [todos, setTodos] = useState([]);

   const dodajTodo = (tekst) => {
    const nowe = {
      id: Date.now(),
      tekst,
      zrobione: false,
    };
    setTodos([...todos, nowe]);
  };
const toggleTodo = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, zrobione: !t.zrobione } : t
      )
    );
  };

  return (
    <>
    <h2>Zadanie 16.2</h2>
    <div>
      <h1>Sklep</h1>

      <Filtr filter={filter} setFilter={setFilter} />

      <ProductList filter={filter} />
    </div>
    <h2>Zadanie 16.3</h2>
    <ToDoForm dodajTodo={dodajTodo} />
    <ToDoList todos={todos} toggleTodo={toggleTodo} />
    <ToDoStan todos={todos} />
    </>
  );
}