import "react-calendar/dist/Calendar.css";

import Calendar from "react-calendar";
import { CalendarWrapper } from "../calendarStyle";
import { changeDate } from "../../../store/slice/calendarSlice";
import { createContext } from "react";
import { useDispatch } from "react-redux";

export const CustomCalenderContext = createContext(null);

export const CustomCalendar = () => {

  const dispatch = useDispatch();
  
const onChange = (e) => {
  const date = new Date(e.toString());
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${year}-${month}-${day}`;

  dispatch(changeDate(formattedDate));
  console.log(formattedDate, "hi");
};


  

  return (
      <CalendarWrapper>
        <Calendar
          onChange={onChange}
          className="calendar"
        />
      </CalendarWrapper>
  );
};
