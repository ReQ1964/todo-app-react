import { Fragment } from "react";
import NewTodo from "./NewTodo/NewTodo";
import TodoList from "./TodoList/TodoList";

const Todo = () => {
  return (
    <Fragment>
      <TodoList />
      <NewTodo />
    </Fragment>
  );
};

export default Todo;
