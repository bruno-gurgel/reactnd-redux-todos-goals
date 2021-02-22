import React from "react";
import { connect } from "react-redux";
import List from "./List";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle,
} from "../actions/todos";

function Todos(props) {
  const todoInput = React.useRef(null);

  const { dispatch } = props;

  const addItem = (event) => {
    event.preventDefault();

    dispatch(handleAddTodo(todoInput.current, () => (todoInput.current = "")));
  };

  const handleChange = (event) => (todoInput.current = event.target.value);

  const removeItem = (todo) => dispatch(handleDeleteTodo(todo));

  const toggleItem = (id) => dispatch(handleToggle(id));
  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add Todo"
        ref={todoInput}
        onChange={handleChange}
      ></input>
      <button onClick={addItem}>Add Todo</button>
      <List items={props.todos} remove={removeItem} toggle={toggleItem} />
    </div>
  );
}

export default connect((state) => ({
  todos: state.todos,
}))(Todos);
