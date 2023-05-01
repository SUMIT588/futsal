import React, { useState } from 'react';

import { AddBookingWrapper } from './addBookingStyle';
import { AddTable } from '../../addTable';
import { CustomCalendar } from '../../../../components/calendar/view';

export const AddBooking = () =>{

    const [value, onChange] = useState(new Date());



const dateString = value.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  console.log(dateString)
  

    return (
        
<AddBookingWrapper>

<CustomCalendar onChange = {onChange} value = {value} />

<AddTable date = {dateString} />

</AddBookingWrapper>


    )
    
}