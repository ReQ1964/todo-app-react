import React, { useReducer, useState } from "react";
import dayjs from "dayjs";

const TodoContext = React.createContext({
  todos: [],
  weekdays: [],
  tags: [],
  isEditing: false,
  selectedDate: null,
  onDateSelect: (day) => {},
  onTagAdd: (tag) => {},
  onTagRemove: (id) => {},
  onTodoEdit: () => {},
  onTodoAdd: (item) => {},
  onTodoRemove: (id) => {},
});

const DAYJS = [
  dayjs().day(0),
  dayjs().day(1),
  dayjs().day(2),
  dayjs().day(3),
  dayjs().day(4),
  dayjs().day(5),
  dayjs().day(6),
];

const sorted = DAYJS.map((item, index) => {
  return {
    weekday: `${DAYJS[index].$d.toString().substring(0, 3)}`,
    day: `${DAYJS[index].$d.toString().substring(8, 10)}`,
  };
});

const DUMMY_WEEK = [
  sorted[0],
  sorted[1],
  sorted[2],
  sorted[3],
  sorted[4],
  sorted[5],
  sorted[6],
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO": {
      return {
        todos: [action.item, ...state.todos],
      };
    }
    case "REMOVE_TODO": {
      return {
        todos: state.todos.filter((item) => action.id != item.id),
      };
    }
  }
};

const tagReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TAG": {
      return {
        tags: [...state.tags, action.item],
      };
    }
    case "REMOVE_TAG": {
      return {
        tags: state.tags.filter((item) => action.id != item.id),
      };
    }
  }
};

export const TodoContextProvider = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedDate, setSelectedDate] = useState(sorted[0].day);

  const [todo, dispatchTodo] = useReducer(todoReducer, {
    todos: [],
    totalAmount: 0,
  });

  const [tags, dispatchTags] = useReducer(tagReducer, {
    tags: [
      {
        id: 0,
        value: "Health",
        color: "green",
      },
      {
        id: 1,
        value: "Work",
        color: "red",
      },
      {
        id: 2,
        value: "School",
        color: "orange",
      },
      {
        id: 3,
        value: "Events",
        color: "blue",
      },
    ],
  });

  const tagAddHandler = (item) => {
    dispatchTags({ type: "ADD_TAG", item: item });
  };

  const tagRemoveHandler = (id) => {
    dispatchTags({ type: "REMOVE_TAG", id: id });
  };

  const todoDateHandler = (day) => {
    setSelectedDate(day);
  };

  const todoEditHandler = () => {
    setIsEditing((prevState) => !prevState);
  };

  const todoAddHandler = (item) => {
    dispatchTodo({ type: "ADD_TODO", item: item });
  };
  const todoRemoveHandler = (id) => {
    todo.todos.length <= 1 ? setIsEditing(false) : null;
    dispatchTodo({ type: "REMOVE_TODO", id: id });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: todo.todos,
        weekdays: DUMMY_WEEK,
        tags: tags.tags,
        isEditing: isEditing,
        selectedDate: selectedDate,
        onDateSelect: todoDateHandler,
        onTagAdd: tagAddHandler,
        onTagRemove: tagRemoveHandler,
        onTodoEdit: todoEditHandler,
        onTodoAdd: todoAddHandler,
        onTodoRemove: todoRemoveHandler,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
