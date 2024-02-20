import React, { useState } from "react";
import scss from "./todo.module.scss";

const Todo = ({ todos, dispatch }) => {
  const [editingTodo, setEditingTodo] = useState(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");

  const deleteTodo = (id) => {
    dispatch({
      type: "delete",
      payload: { id },
    });
  };

  const handleSave = () => {
    dispatch({
      type: "edit",
      payload: {
        id: editingTodo,
        isCompleted: false,
        updates: {
          name,
          age,
          photo,
        },
      },
    });
    cancelEdit();
  };

  const handleEdit = (item) => {
    setName(item.name);
    setAge(item.age);
    setPhoto(item.photo);
    setEditingTodo(item.id);
  };

  const cancelEdit = () => {
    setEditingTodo(null);
    setName("");
    setAge("");
    setPhoto("");
  };

  const handleChange = (id) => {
    dispatch({
      type: "isCompleted",
      payload: {
        id,
      },
    });
  };

  return (
    <div className={scss.container}>
      {todos.map((item) => (
        <div
          key={item.id}
          className={scss.card}
          onClick={() => handleChange(item.id)}
        >
          {editingTodo === item.id ? (
            <>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <input
                type="text"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <h1 className={item.isCompleted ? scss.text : scss.text2}>
                {item.name}
              </h1>
              <img src={item.photo} alt="" />
              <p>{item.age}</p>
              <button onClick={() => deleteTodo(item.id)}>Delete</button>
              <button onClick={() => handleEdit(item)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Todo;
