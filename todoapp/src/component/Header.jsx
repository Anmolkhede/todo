import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingValue, setEditingValue] = useState('');

  const handleInputChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, editing: false }]);
      setNewTodo('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  const handleUpdateTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].text = editingValue;
    updatedTodos[index].editing = false;
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const handleEditTodo = (index, text) => {
    setEditingIndex(index);
    setEditingValue(text);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
  };

  const handleEditingInputChange = (event) => {
    setEditingValue(event.target.value);
  };

  return (
    <div  class="bg-purple-800 h-screen  w-full align-center text-center items-center ">
      <div class="p-40">
      <h1 class="text-purple-500 font-semibold text-[40px]">Todo App</h1>
      <input
     class="text-black rounded-lg h-[50px] mt-2  w-[500px] pl-5"
        type="text"
        placeholder="Enter your todo"
        value={newTodo}
        onChange={handleInputChange}
      />
      <button class="text-black rounded-lg h-[50px] border hover:bg-purple-500 border-white bg-white ml-5 px-2 font-semibold"onClick={handleAddTodo}>Add Todo</button>
      <h1 class="text-white mt-5 font-bold text-[25px]">Todo list</h1>
      <ul>
        {todos.map((todo, index) => (
          <li class="text-black border border-white rounded-lg mt-5 h-[50px] "key={index}>
            {editingIndex === index ? (
              <>
                <input class="text-black rounded-lg h-[30px] mt-2  w-[500px] pl-5"
                  type="text"
                  value={editingValue}
                  onChange={handleEditingInputChange}
                />
                <button class="text-red-200 ml-10" onClick={() => handleUpdateTodo(index)}>Update/</button>
               
                <button class="text-red-200 "onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span class="text-white text-lg ">{todo.text}</span>
                <button class="text-red-200 ml-10" onClick={() => handleEditTodo(index, todo.text)}>Edit/</button>
                <button   class="text-red-200 " onClick={() => handleDeleteTodo(index)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default TodoApp;
