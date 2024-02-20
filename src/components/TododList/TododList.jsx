import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import scss from "./todoLust.module.scss";
import Todo from "../Todo";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TododList = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [photo, setPhoto] = useState("");

  const addTodo = () => {
    if (name !== "" || age !== "" || photo !== "") {
      dispatch({
        type: "post",
        payload: {
          id: Math.random(),
          isCompleted: false,
          name: name,
          age: age,
          photo: photo,
        },
      });
    } else {
      toast("write the  text");
    }
    setAge("");
    setName("");
    setPhoto("");
  };
  const deleteAll = () =>
    dispatch({
      type: "deleteAll",
    });

  return (
    <div className={scss.mainTodo}>
      <div className={scss.todoList}>
        <input
          placeholder="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="age"
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          placeholder="photo"
          type="text"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />

        <button onClick={addTodo}>add</button>
        <button onClick={deleteAll}>delete all</button>
        <ToastContainer />
      </div>
      <Todo todos={todos} dispatch={dispatch} />
    </div>
  );
};

export default TododList;
