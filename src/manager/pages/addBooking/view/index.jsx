import React, { useState } from "react";

import { AddBookingWrapper } from "./addBookingStyle";
import { AddTable } from "../../addTable";
import { CustomCalendar } from "../../../../components/calendar/view";
import { changeDate } from "../../../../store/slice/calendarSlice";
import { useDispatch } from "react-redux";

export const AddBooking = () => {
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
    <AddBookingWrapper>
      <CustomCalendar onChange={onChange} />

      <AddTable  />
    </AddBookingWrapper>
  );
};
