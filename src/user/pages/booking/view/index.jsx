import { BookingWrapper } from "../bookingStyle";
import { CustomCalendar } from "../../../../components/calendar/view";
import { Table } from "../../../../components/table/view";
import { useState } from "react";

export const Booking = () => {
    


  const [value, onChange] = useState(new Date());

  console.log(localStorage.getItem("userId"));

  const dateString = value.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  console.log({ dateString });

  return (
    <BookingWrapper>
      <h3>'Pick Date'</h3>

      <CustomCalendar value={value} onChange={onChange} />

      <div className="notice">
        <h2>Booking Opening Hour : </h2>
        <p>Date : {dateString}</p>
        <p>Already Booked Slot</p>
      </div>

      <div className = 'table'>
    
        <Table date = {dateString}/>
        
</div>
    </BookingWrapper>
  );
};
