import { BookingWrapper } from "../bookingStyle";
import { CustomCalendar } from "../../../../components/calendar/view"
import { Table } from "../../../../components/table/view";
import { useState } from "react";

export const Booking = () => {

const [value, onChange] = useState(new Date());



const dateString = value.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  
  console.log({dateString});
  
    return (
        <BookingWrapper>

            <h3>'Pick Date'</h3>
          
        <CustomCalendar value = {value} onChange = {onChange} />

<div className = 'table'>
    
        <Table date = {dateString}/>
        
</div>
        </BookingWrapper>
    )
}