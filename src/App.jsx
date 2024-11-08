import React, { useState } from 'react';
import TodoItem from './components/tudo/Tudo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Todo qo'shish funksiyasi
  const addTodo = () => {
    if (!title) return;
    const newTodo = {
      id: Date.now(),
      title,
      description,
      completed: false,
      createdAt: new Date().toLocaleString(),
    };
    setTodos([...todos, newTodo]);
    setTitle('');
    setDescription('');
  };

  // Todo'ni o'chirish funksiyasi
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Todo'ni yangilash funksiyasi
  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Todo List</h1>
      
      <div className="flex flex-col max-w-md mx-auto space-y-4">
        <input
          type="text"
          placeholder="Todo nomi"
          className="p-2 border rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Todo tavsifi"
          className="p-2 border rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={addTodo}
          className="bg-blue-500 text-white py-2 px-4 rounded"
        >
          Qo'shish
        </button>

        <div className="mt-6">
          {todos.length ? (
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
              />
            ))
          ) : (
            <p className="text-center text-gray-500">Todo'lar yo'q</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
