import React, { useRef, useContext, Fragment } from "react";
import classes from "./NewTag.module.css";
import Input from "../../UI/Input";
import Button from "../../UI/Button";
import TodoContext from "../../store/todo-ctx";

const NewTag = (props) => {
  const todoCtx = useContext(TodoContext);
  const { onTagAdd, onTagRemove, tags } = todoCtx;

  const tagName = useRef();
  const tagColor = useRef();
  const tag = useRef();

  const tagAddHandler = (e) => {
    e.preventDefault();
    onTagAdd({
      id: Math.random(),
      value: tagName.current.value,
      color: tagColor.current.value,
    });
    tagName.current.value = "";
    tagColor.current.value = "#000000";
  };

  const tagRemoveHandler = (e) => {
    e.preventDefault();
    const tagIndex = tags.findIndex((item) => item.value === tag.current.value);
    if (tags.length === 0) {
      alert("No tags to delete");
      return;
    } else {
      onTagRemove(tag.current[tagIndex].id);
    }
  };

  return (
    <Fragment>
      <section className={classes["tag-add"]}>
        <h2>Add a new tag!</h2>
        <form action="" onSubmit={tagAddHandler}>
          <div className={classes.inputs}>
            <Input type="text" placeholder="Name.." ref={tagName} />
            <div>
              <Input type="color" ref={tagColor} />
            </div>
          </div>
          <Button>
            <span className="material-symbols-outlined">add</span>
          </Button>
        </form>
      </section>
      <section className={classes["tag-delete"]}>
        <h2>Delete chosen tag</h2>
        <form onSubmit={tagRemoveHandler}>
          <select ref={tag}>
            {tags.map((tag) => (
              <option value={tag.value} key={tag.id} id={tag.id}>
                {tag.value}
              </option>
            ))}
          </select>
          <Button>
            <span className="material-symbols-outlined">remove</span>
          </Button>
        </form>
        <Button className={classes.return} onClick={props.onChangeView}>
          <span className="material-symbols-outlined">keyboard_return</span>
        </Button>
      </section>
    </Fragment>
  );
};

export default NewTag;
