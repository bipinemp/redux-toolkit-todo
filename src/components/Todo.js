import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "../features/todo";

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.value);
  const [data, setData] = useState({
    title: "",
    desc: "",
  });

  const [upTodo, setUpTodo] = useState({
    title: "",
    desc: "",
  });

  const [isEdit, setIsEdit] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTodo({
        id: todos.length === 0 ? 1 : todos[todos.length - 1].id + 1,
        title: data.title,
        desc: data.desc,
      })
    );
    setData({
      title: "",
      desc: "",
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleUpdate = (id) => {
    setIsEdit(true);
    setEditId(id);
    const updatedTodo = todos.find((todo) => todo.id === id);
    setUpTodo(updatedTodo);
  };

  return (
    <div>
      <h1>Todo :</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={data.title}
          type="text"
          placeholder="Title.."
          name="title"
        />
        <input
          onChange={handleChange}
          value={data.desc}
          type="text"
          placeholder="Desc.."
          name="desc"
        />
        <button type="submit"> Submit</button>
      </form>
      <h1>Todos :</h1>
      <p style={{ color: "crimson" }}>{todos.length === 0 && "No Todos !!"}</p>
      {todos.map((todo) => {
        return (
          <div className="todoItem" key={todo.id}>
            {isEdit && editId === todo.id && (
              <form>
                <input
                  onChange={(e) =>
                    setUpTodo({ ...upTodo, [e.target.name]: e.target.value })
                  }
                  value={upTodo.title}
                  type="text"
                  name="title"
                  placeholder="Title"
                />
                <input
                  onChange={(e) =>
                    setUpTodo({ ...upTodo, [e.target.name]: e.target.value })
                  }
                  value={upTodo.desc}
                  type="text"
                  name="desc"
                  placeholder="Desc"
                />
                <button
                  onClick={() => {
                    dispatch(
                      updateTodo({
                        id: editId,
                        title: upTodo.title,
                        desc: upTodo.desc,
                      })
                    );
                    setIsEdit(false);
                  }}
                  type="button"
                >
                  Save Changes
                </button>
              </form>
            )}
            <p>
              <b>Title :</b> {todo.title}
            </p>
            <p>
              <b>Desc :</b> {todo.desc}
            </p>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <button
                onClick={() => handleDelete(todo.id)}
                style={{ backgroundColor: "crimson" }}
              >
                Delete
              </button>
              <button onClick={() => handleUpdate(todo.id)}>Update</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Todo;
