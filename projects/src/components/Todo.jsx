import { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    setTodo((todo) => {
      return todo.concat({ text: input, id: Math.floor(Math.random() * 100) });
    });
    setInput("");
  };
  const removeTodo = (id) => {
    setTodo((todo) => {
      return todo.filter((t) => t.id !== id);
    });
  };
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="enter todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        <ul>
          {todo.map(({ text, id }) => (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => removeTodo(id)}>x</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Todo;
