import React, {useState} from "react";
function App() {
  const [todo, setTodo] = useState([]);

  function handleRemoveTodo(index) {
    setTodo((todo) => todo.filter((todo, _index) => _index !== index));
  }

  function handlerAddTodo(event) {
    event.preventDefault();

    const text = event.target.text.value;

    if (!text || todo.includes(text)) return;

    setTodo((todo) => todo.concat(text));

    event.target.text.value = "";
  }

  return (
    <div>
      <form onSubmit={handlerAddTodo}>
        <input name="text" type="text" />
        <button>Add todo</button>
        <span></span>
      </form>
      <ul>
        {todo.map((todo, index) => (
          <li key={todo}>
            {todo}
            <button onClick={() => handleRemoveTodo(index)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
