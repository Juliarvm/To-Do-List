import { useState, useEffect } from 'react';
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";
import Search from './components/Search';
import Filter from './components/Filter';

function App() {
  // Carrega as tarefas do localStorage ou usa um valor inicial
  const loadTodosFromLocalStorage = () => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  };

  const loadCategoriesFromLocalStorage = () => {
    const savedCategories = localStorage.getItem('categories');
    return savedCategories ? JSON.parse(savedCategories) : ["Trabalho", "Pessoal", "Estudos"];
  };

  const [todos, setTodos] = useState(loadTodosFromLocalStorage);
  const [categories, setCategories] = useState(loadCategoriesFromLocalStorage);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [sort, setSort] = useState("Asc");

  // Função para adicionar uma nova tarefa
  const addTodo = (text, category, rating) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
      rating: rating || 1, // Definindo o rating ao criar a tarefa
    };

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Função para adicionar uma nova categoria
  const addCategory = (newCategory) => {
    if (!categories.includes(newCategory)) {
      const updatedCategories = [...categories, newCategory];
      setCategories(updatedCategories);
      localStorage.setItem('categories', JSON.stringify(updatedCategories));
    }
  };

  // Função para remover uma categoria
  const removeCategory = (categoryToRemove) => {
    const updatedCategories = categories.filter((cat) => cat !== categoryToRemove);
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));

    // Remover a categoria também das tarefas existentes
    const updatedTodos = todos.filter((todo) => todo.category !== categoryToRemove);
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  // Função para remover uma tarefa
  const removeTodo = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Função para completar ou desmarcar uma tarefa
  const completeTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  // Função para atualizar a avaliação de uma tarefa
  const updateRating = (id, rating) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, rating } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    const savedCategories = localStorage.getItem('categories');
    if (savedTodos) setTodos(JSON.parse(savedTodos));
    if (savedCategories) setCategories(JSON.parse(savedCategories));
  }, []);

  return (
    <div className="app">
      <h1>Lista de tarefas</h1>
      <Search search={search} setSearch={setSearch} />
      <Filter filter={filter} setFilter={setFilter} setSort={setSort} />

      <div className="todo-list">
        {todos
          .filter((todo) =>
            filter === "All"
              ? true
              : filter === "Completed"
                ? todo.isCompleted
                : !todo.isCompleted
          )
          .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
          .sort((a, b) =>
            sort === "Asc"
              ? a.text.localeCompare(b.text)
              : b.text.localeCompare(a.text)
          )
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              completeTodo={completeTodo}
              updateRating={updateRating} // Passando a função de atualização de rating
            />
          ))}
      </div>
      <TodoForm addTodo={addTodo} categories={categories} addCategory={addCategory} removeCategory={removeCategory} />
    </div>
  );
}

export default App;