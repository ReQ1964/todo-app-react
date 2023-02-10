import classes from "./DateItem.module.css";

const DateItem = (props) => {
  const todoDateHandler = () => {
    props.onDateSelect(props.day);
  };

  return (
    <button
      className={`${classes.date} ${
        props.selectedDate === props.day && classes.selected
      }`}
      onClick={todoDateHandler}
    >
      <h3>{props.weekday.substring(0, 3)}</h3>
      <p>{props.day}</p>
    </button>
  );
};

export default DateItem;
