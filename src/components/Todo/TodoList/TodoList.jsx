import React, { useContext } from "react";
import TodoContext from "../../store/todo-ctx";
import classes from "./TodoList.module.css";
import TodoItem from "./TodoItem/TodoItem";

const TodoList = () => {
  const todoCtx = useContext(TodoContext);
  const { todos, selectedDate } = todoCtx;

  const filteredTodos = todos.filter((item) => `${item.date}` === selectedDate);

  return (
    <React.Fragment>
      {todos.length === 0 && (
        <p className={classes.none}>How about adding some tasks?</p>
      )}
      {todos.length > 0 && (
        <ul className={classes["todo-list"]}>
          {filteredTodos.map((item) => (
            <TodoItem
              key={item.id}
              id={item.id}
              title={item.title}
              desc={item.desc}
              tag={item.tag}
              date={item.date}
            />
          ))}
        </ul>
      )}
    </React.Fragment>
  );
};

export default TodoList;
