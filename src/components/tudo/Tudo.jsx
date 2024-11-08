import React from 'react';

const TodoItem = ({ todo, deleteTodo, toggleComplete }) => {
  return (
    <div className={`flex justify-between items-center p-4 border rounded mb-2 ${todo.completed ? 'bg-green-100' : 'bg-white'}`}>
      <div>
        <h2 className={`text-lg font-semibold ${todo.completed ? 'line-through text-gray-500' : ''}`}>
          {todo.title}
        </h2>
        <p className="text-sm text-gray-600">{todo.description}</p>
        <p className="text-xs text-gray-400">Yaratilgan sana: {todo.createdAt}</p>
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => toggleComplete(todo.id)}
          className={`py-1 px-2 rounded ${todo.completed ? 'bg-yellow-500' : 'bg-green-500'} text-white`}
        >
          {todo.completed ? 'Bekor qilish' : 'Bajarildi'}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="bg-red-500 text-white py-1 px-2 rounded"
        >
          O'chirish
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
