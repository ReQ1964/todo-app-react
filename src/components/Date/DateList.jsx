import React, { useContext } from "react";
import DateItem from "./DateItem";
import { Swiper, SwiperSlide } from "swiper/react";
import TodoContext from "../store/todo-ctx";
import "swiper/css";

const DateList = () => {
  const todoCtx = useContext(TodoContext);
  const { weekdays, onDateSelect, selectedDate } = todoCtx;

  const todoDateHandler = (day) => {
    onDateSelect(day);
  };

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={4}
      slidesOffsetBefore={20}
      slidesOffsetAfter={20}
    >
      {weekdays.map((item) => {
        return (
          <SwiperSlide key={item.day}>
            <DateItem
              weekday={item.weekday}
              day={item.day}
              onDateSelect={todoDateHandler}
              selectedDate={selectedDate}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default DateList;
