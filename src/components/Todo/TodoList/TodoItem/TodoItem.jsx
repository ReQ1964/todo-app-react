import classes from "./TodoItem.module.css";
import React, { useContext } from "react";
import TodoContext from "../../../store/todo-ctx";

const TodoItem = (props) => {
  const todoCtx = useContext(TodoContext);
  const { onTodoRemove, isEditing, tags } = todoCtx;

  const todoRemoveHandler = () => {
    onTodoRemove(props.id);
  };

  let color;
  tags.filter((tag) => {
    if (tag.value === props.tag) {
      color = tag.color;
    }
  });

  return (
    <li className={classes["todo-item"]} style={{ borderColor: color }}>
      {isEditing && (
        <span className="material-symbols-outlined" onClick={todoRemoveHandler}>
          close
        </span>
      )}
      <div className={classes["todo-item__container-left"]}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
      <div className={classes["todo-item__container-right"]}>
        <span style={{ color: color }}>{props.tag}</span>
      </div>
    </li>
  );
};

export default TodoItem;
