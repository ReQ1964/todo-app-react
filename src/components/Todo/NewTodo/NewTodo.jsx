import React, { useContext, Fragment, useState, useRef } from "react";
import classes from "./NewTodo.module.css";
import TodoContext from "../../store/todo-ctx";
import NewTag from "../NewTag/NewTag";
import Modal from "../../UI/Modal";
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import dayjs from "dayjs";

const NewTodo = () => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [isAddTag, setIsAddTag] = useState(false);
  const title = useRef();
  const desc = useRef();
  const tag = useRef();
  const date = useRef();

  let currentMonth = dayjs().month() + 1;
  let curMonth = currentMonth.toString().padStart(2, "0");

  const todoCtx = useContext(TodoContext);
  const { onTodoAdd, onTodoEdit, todos, weekdays, tags } = todoCtx;

  const addTodoHandler = (e) => {
    e.preventDefault();

    onTodoAdd({
      title: title.current.value,
      desc: desc.current.value,
      tag: tag.current.value,
      date: date.current.value.split("-")[2],
      id: Math.random(),
    });
    formVisibilityHandler();
  };
  const formVisibilityHandler = () => {
    setFormIsShown((prevState) => {
      return !prevState;
    });
  };
  const newTagHandler = () => {
    setIsAddTag((prevState) => {
      return !prevState;
    });
  };

  return (
    <Fragment>
      {formIsShown && (
        <Modal
          onClose={formVisibilityHandler}
          className={classes["new-todo-modal"]}
        >
          {isAddTag && <NewTag onChangeView={newTagHandler} />}
          {!isAddTag && (
            <Fragment>
              <h2>Add your task!</h2>
              <form onSubmit={addTodoHandler}>
                <div className={classes["new-todo-modal__inputs"]}>
                  <Input type="text" placeholder="Name.." ref={title} />
                  <Input type="text" placeholder="Description.." ref={desc} />
                  <select ref={tag}>
                    {tags.map((tag) => (
                      <option value={tag.value} key={Math.random()}>
                        {tag.value}
                      </option>
                    ))}
                  </select>
                  <Input
                    type="date"
                    min={`2023-${curMonth}-${weekdays[0].day}`}
                    max={`2023-${curMonth}-${weekdays[6].day}`}
                    ref={date}
                  />
                </div>
                <Button type="submit">+</Button>
              </form>
              <Button className={classes.next} onClick={newTagHandler}>
                <span className="material-symbols-outlined">edit_note</span>
              </Button>
            </Fragment>
          )}
        </Modal>
      )}
      <footer className={classes["new-todo"]}>
        <Button type="button" onClick={formVisibilityHandler}>
          <span className="material-symbols-outlined">add</span>
        </Button>
        <p>You have {todos.length} tasks</p>
        <Button type="button" onClick={onTodoEdit}>
          <span className="material-symbols-outlined">edit</span>
        </Button>
      </footer>
    </Fragment>
  );
};

export default NewTodo;
